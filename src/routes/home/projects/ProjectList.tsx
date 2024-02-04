import Project from "./Project";
import projects from "./projects";
export default function ProjectList() {
  return (
    <div className="flex flex-col gap-2 items-center px-5 md:px-20">
      <h1>My Projects</h1>
      <hr className="w-10 my-2 border-red-500" />

      {projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  );
}
