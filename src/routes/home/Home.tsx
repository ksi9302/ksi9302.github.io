import Greetings from "./Greetings";
import ProjectList from "./projects/ProjectList";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Greetings />
      <ProjectList />
    </div>
  );
}
