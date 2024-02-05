import { useQuery } from "@apollo/client";
import Project from "./Project";
import { GET_PROJECTS } from "../../../gqls";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

export default function ProjectList() {
  const { data, loading } = useQuery(GET_PROJECTS, {
    onError(error) {
      console.log(error);
    },
  });

  const projects = data?.projects || [];

  return (
    <div className="flex flex-col gap-2 items-center px-5 md:px-20 py-10">
      <Link to="/projects">
        <h1>My Projects</h1>
      </Link>
      <hr className="w-10 my-2 border-red-500" />

      {loading && <ReactLoading type="cylon" className="my-10" />}

      <div className="gap-5 md:gap-10 flex flex-col">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
