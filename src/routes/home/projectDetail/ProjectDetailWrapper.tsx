import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROJECT_BY_ID } from "../../../gqls";
import ReactLoading from "react-loading";
import ProjectDetail from "./ProjectDetail";

export default function ProjectDetailWrapper() {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id },
    onError(error) {
      console.log(error);
    },
  });

  const project = data?.projects_by_pk;

  return (
    <>
      {loading && (
        <div className="flex flex-col gap-2 items-center">
          <ReactLoading type="cylon" className="my-10" />
        </div>
      )}
      {!loading && !project && (
        <div className="flex flex-col gap-2 items-center">
          <h1>Project Not Found</h1>
        </div>
      )}

      {project && <ProjectDetail project={project} />}
    </>
  );
}
