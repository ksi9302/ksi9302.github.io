import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import Header from "./components/Header";
import ProjectDetailWrapper from "./routes/home/projectDetail/ProjectDetailWrapper";
import About from "./routes/About";
import Contact from "./routes/Contact";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import ProjectList from "./routes/home/projects/ProjectList";
import Footer from "./components/Footer";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://suited-kiwi-12.hasura.app/v1/graphql",
  }),
  cache: new InMemoryCache(),
});

const hire_me = `                                                                                                                                       
                                                                                                                                     
HHHHHHHHH     HHHHHHHHHIIIIIIIIIIRRRRRRRRRRRRRRRRR   EEEEEEEEEEEEEEEEEEEEEE     MMMMMMMM               MMMMMMMMEEEEEEEEEEEEEEEEEEEEEE
H:::::::H     H:::::::HI::::::::IR::::::::::::::::R  E::::::::::::::::::::E     M:::::::M             M:::::::ME::::::::::::::::::::E
H:::::::H     H:::::::HI::::::::IR::::::RRRRRR:::::R E::::::::::::::::::::E     M::::::::M           M::::::::ME::::::::::::::::::::E
HH::::::H     H::::::HHII::::::IIRR:::::R     R:::::REE::::::EEEEEEEEE::::E     M:::::::::M         M:::::::::MEE::::::EEEEEEEEE::::E
  H:::::H     H:::::H    I::::I    R::::R     R:::::R  E:::::E       EEEEEE     M::::::::::M       M::::::::::M  E:::::E       EEEEEE
  H:::::H     H:::::H    I::::I    R::::R     R:::::R  E:::::E                  M:::::::::::M     M:::::::::::M  E:::::E             
  H::::::HIRE:::::::H    I::::I    R:::::PETER:::::R   E::::::EEEEEEEEEE        M:::::::M::::M   M::::M:::::::M  E::::::EEEEEEEEEE   
  H:::::::::::::::::H    I::::I    R:::::::::::::RR    E:::::::::::::::E        M::::::M M::::M M::::M M::::::M  E:::::::::::::::E   
  H:::::::::::::::::H    I::::I    R:::::NOW:::::::R   E:::::::::::::::E        M::::::M  M::::M::::M  M::::::M  E:::::::::::::::E   
  H::::::HHHHH::::::H    I::::I    R::::R     R:::::R  E::::::EEEEEEEEEE        M::::::M   M:::::::M   M::::::M  E::::::EEEEEEEEEE   
  H:::::H     H:::::H    I::::I    R::::R     R:::::R  E:::::E                  M::::::M    M:::::M    M::::::M  E:::::E             
  H:::::H     H:::::H    I::::I    R::::R     R:::::R  E:::::E       EEEEEE     M::::::M     MMMMM     M::::::M  E:::::E       EEEEEE
HH::::::H     H::::::HHII::::::IIRR:::::R     R:::::REE::::::EEEEEEEE:::::E     M::::::M               M::::::MEE::::::EEEEEEEE:::::E
H:::::::H     H:::::::HI::::::::IR::::::R     R:::::RE::::::::::::::::::::E     M::::::M               M::::::ME::::::::::::::::::::E
H:::::::H     H:::::::HI::::::::IR::::::R     R:::::RE::::::::::::::::::::E     M::::::M               M::::::ME::::::::::::::::::::E
HHHHHHHHH     HHHHHHHHHIIIIIIIIIIRRRRRRRR     RRRRRRREEEEEEEEEEEEEEEEEEEEEE     MMMMMMMM               MMMMMMMMEEEEEEEEEEEEEEEEEEEEEE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                                                                                                                     
  `;

console.log(hire_me);

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-slate-900 flex flex-col w-screen h-screen items-center overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-slate-500 md:scrollbar-track-slate-900">
        <HashRouter>
          <div className="flex-1 w-full max-w-screen-2xl flex flex-col">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/project/:id" element={<ProjectDetailWrapper />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </HashRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
