import { useParams } from "react-router-dom";
import projects from "../projects/projects";

export default function ProjectDetail() {
  const { title } = useParams();

  const project = projects.find(p => p.title === title);

  if (!project) {
    return <div>Project Not Found!</div>;
  }
  return <div>Project Detail Page under construction</div>;
}
