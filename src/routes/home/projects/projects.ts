import { project } from "../../../types/types";

const projects: project[] = [
  {
    title: "Quezone PWA",
    desc: `
    A Full Stack CRM project to upgrade the current native app + pwa configuration adding new features, extendability, stability and performonce.
    Main features include, customer management, inventory, task, schedule management, customer-editable-automations, biztalk(im-notifications), responsive-UI and notion like tab configurations. 
    `,
    code: `    import { useEffect, useState } from "react";
    import { useCustomerStore } from "../../../../store/customerStore";
    import Button from "@mui/material/Button";
    import { NavLink } from "react-router-dom";
    import TuneIcon from "@mui/icons-material/Tune";
    import TabSelect from "./tabSelect";
    import Fab from "@mui/material/Fab";
    import AddIcon from "@mui/icons-material/Add";
    import uuid from "react-uuid";
    import CustomerFilters from "./customerFilters";
    import Views from "./views/views";
    import { refineFilters } from "../../../../utils/filterMethods";
    import { useLazyQuery, useMutation } from "@apollo/client";
    import {
      GET_CUSTOMERS_CONDITIONAL,
      READ_CUSTOMERS,
      STREAM_CUSTOMERS,
    } from "../../../../gqls/customer";
    import { cloneDeep } from "apollo-utilities";
    import CircularProgress from "@mui/material/CircularProgress";
    import { green } from "@mui/material/colors";
    import CustomerSearch from "./customerSearch";
    import MobileSearch from "./mobileSearch";
    import { useAuthStore } from "../../../../store/authStore";
    import { exportData } from "../../../../utils/objectArrayMethods";
    
    export default function CustomersMain() {
      const { tabs, setTabs, currentTab, setCurrentTab } = useCustomerStore();
    
      const selectedTab = tabs.find(t => t.id == currentTab);
      const [filtering, setFiltering] = useState(false);
    
      const addTab = () => {
        const id = uuid();
        setTabs([
          ...tabs,
          {
            id,
            name: "새 탭",
            filters: [],
            cursor: new Date().toISOString(),
            view: "list",
          },
        ]);
        setCurrentTab(id);
        setFiltering(true);
      };
    
      useEffect(() => {
        if (tabs.length == 0) {
          addTab();
        }
      });
    
      const filters = selectedTab?.filters;
      const cursor = selectedTab?.cursor;
      const refinedFilters = refineFilters(filters || []);
      const { where, order_by } = refinedFilters;
      const [totalLength, setTotalLength] = useState(0);
    
      const [getCustomers, { data, subscribeToMore, fetchMore, loading }] =
        useLazyQuery(GET_CUSTOMERS_CONDITIONAL);
    
      const limit = 200;
    
      const updateCursor = () => {
        setTabs(
          tabs.map(t => {
            if (t.id == selectedTab?.id) {
              return { ...selectedTab, cursor: new Date().toISOString() };
            }
            return t;
          })
        );
      };
    
      useEffect(() => {
        getCustomers({
          variables: {
            where,
            order_by,
            limit,
            offset: 0,
          },
          onCompleted(data) {
            setTotalLength(data.customers_aggregate?.aggregate?.count);
            updateCursor();
          },
          onError(error) {
            console.log(error);
          },
        });
      }, [filters, selectedTab?.id]);
    
      const customers = data?.customers || [];
    
      const loadMore = () => {
        const currentLength = customers.length;
        if (currentLength >= totalLength) return;
        fetchMore({
          variables: {
            where,
            order_by,
            offset: currentLength,
            limit,
          },
        });
      };
    
      const canLoadMore = totalLength > customers.length;
    
      const ids = customers.map(c => c.id);
    
      useEffect(() => {
        let _and = where._and;
        delete _and.deleted;
    
        const subFilter = {
          _or: [
            _and,
            // { _and: where._and.filter(p => !Object.hasOwn(p, "deleted")) },
            { id: { _in: ids || [] } },
          ],
        };
    
        const unsubscribe = subscribeToMore({
          document: STREAM_CUSTOMERS,
          variables: {
            where: subFilter,
            cursor: {
              initial_value: { updated_at: cursor },
              ordering: "ASC",
            },
          },
          updateQuery: (previous, { subscriptionData }) => {
            updateCursor();
            if (!subscriptionData.data) return previous;
            const previousData = cloneDeep(previous.customers);
            const newFeedItem = subscriptionData.data.customers_stream;
            const existing =
              previousData?.filter(p => !newFeedItem.find(i => i.id == p.id)) || [];
            const filterDeleted = [...newFeedItem, ...existing].filter(
              p => !p.deleted
            );
            return Object.assign({}, previous, {
              customers: filterDeleted,
            });
          },
        });
        return () => {
          unsubscribe();
        };
      }, [where, ids]);
    
      const [readCustomers] = useMutation(READ_CUSTOMERS);
    
      const { user } = useAuthStore();
    
      const readAll = () => {
        if (!user) {
          return;
        }
        const customersToRead = customers
          .filter(c => !c.reads.includes(user.id))
          .map(c => c.id);
    
        if (customersToRead.length > 0) {
          readCustomers({
            variables: {
              ids: customersToRead,
              userId: user.id,
            },
          });
        }
      };
    
      const exportToExcel = () => {
        const _data = customers.map(d => ({
          id: d.id,
          year: d.year,
          type: d.type.name,
          status: d.status.name,
          number: d.number,
          address: d.address,
          postCode: d.postCode,
          description: d.description,
          // TODO: Extend Data
        }));
        exportData(_data);
      };

      return (
        <div className="flex flex-col gap-2 bg-lightBG flex-1 px-3 md-p-0 pb-20 md:pb-4">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <div className="hidden md:flex flex-row justify-end">
              <NavLink to="/customers/add">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    fontWeight: 500,
                  }}
                  color="success"
                >
                  새 고객 등록
                </Button>
              </NavLink>
            </div>
            <div className="flex flex-row md:items-center gap-2 md:flex-wrap mt-4">
              {/* Tab Select */}
              <div className="flex flex-row items-center scrollbar-none overflow-x-scroll flex-1 pt-[4px] md:pt-[1px] p-[1px]">
                {tabs.map(tab => (
                  <TabSelect tab={tab} key={tab.id} />
                ))}
                <div
                  onClick={addTab}
                  className={\`cursor-pointer text-gray-500 font-medium border-b-2 md:hover:text-quezone md:hover:ring-quezone border-b-transparent px-2 py-[1px] rounded-sm\`}
                >
                  +
                </div>
                </div>
                {/* Search, Add */}
                <div className="flex flex-row items-center gap-2 md:gap-3 justify-end">
                  {/* Search DeskTop */}
                  <div className="hidden md:flex">
                    <CustomerSearch />
                  </div>
                  <MobileSearch />
                  <div
                    onClick={() => setFiltering(!filtering)}
                    className={\`bg-white p-[2px] md:p-[6px] rounded-sm ring-1 ring-gray-300 cursor-pointer md:hover:ring-quezone md:hover:text-quezone \${
                      filtering && "text-quezone ring-quezone"
                    }\`}
                  >
                    <TuneIcon />
                  </div>
                  <div className="hidden md:flex flex-row items-center gap-3">
                    {!loading && canLoadMore && (
                      <Button
                        onClick={loadMore}
                        variant="outlined"
                        sx={{ backgroundColor: "white" }}
                        color="success"
                      >
                        더 불러오기
                      </Button>
                    )}
                    <div
                      className={\`bg-white p-[2px] md:p-[6px] rounded-sm ring-1 ring-gray-300 cursor-pointer text-gray-300\`}
                    >
                      {totalLength}
                    </div>
                  </div>
                  {loading && (
                    <CircularProgress size={18} sx={{ color: green[500] }} />
                  )}
                </div>
              </div>
            </div>
            {/* Tabs */}
            <div className="flex flex-row gap-2 flex-wrap md:flex-nowrap">
              {filtering && (
                <CustomerFilters
                  setFiltering={setFiltering}
                  readAll={readAll}
                  exportToExcel={exportToExcel}
                />
              )}
              {selectedTab && (
                <Views
                  customers={customers}
                  tab={selectedTab}
                  loadMore={loadMore}
                  loading={loading}
                  canLoadMore={canLoadMore}
                />
              )}
            </div>
            {/* Mobile Add */}
            <div className="md:hidden absolute bottom-3 right-3">
              <NavLink to={"/customers/add"}>
                <Fab color="success" size="medium">
                  <AddIcon />
                </Fab>
              </NavLink>
            </div>
          </div>
        );
      }
    `,
    photo: "quezonePWA.png",
    status: "on-going",
    usedStacks: [
      "react",
      "typescript",
      "tailwind",
      "material-ui",
      "zustand",
      "apollo",
      "hasura",
      "graphQL",
      "postgresql",
      "nodejs",
      "express-js",
      "socket-io",
      "s3-ojbect-storage",
    ],
  },
];

export default projects;
