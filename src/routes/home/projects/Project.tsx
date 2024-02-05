import { Link } from "react-router-dom";
import { project } from "../../../types";
import ProjectImages from "./ProjectImages";

interface props {
  project: project;
}

export default function Project({ project }: props) {
  const { id, title, imgs, desc, status, stacks } = project;

  return (
    <Link to={`/project/${id}`}>
      <div className="group relative rounded-sm ">
        {/* Imgs */}
        <ProjectImages imgs={imgs} id={id} />
        {/* Body */}
        <div className="w-full h-full absolute top-0 left-0 flex flex-col rounded-sm">
          {/* Header */}
          <div className="flex flex-row justify-between p-2 bg-red-900 bg-opacity-80">
            <div>{title}</div>
            <div className="flex flex-row items-center gap-2">
              <div
                className="p-[5px] rounded-full mt-[2px]"
                style={{
                  backgroundColor: status.color,
                }}
              />
              {status.name}
            </div>
          </div>

          {/* Desc, Code */}
          <div className="hidden flex-1 md:group-hover:flex flex-col pt-10 lg:pt-20 overflow-auto pb-5">
            <div className="whitespace-pre-wrap text-center px-5 text-sm lg:text-lg">
              {desc}
            </div>
            <div className="my-5 text-center text-red-400">made using</div>
            <div className="flex flex-row gap-2 flex-wrap px-10">
              {stacks.map((stack, i) => (
                <div className="bg-red-500 px-2 py-1 rounded-sm" key={i}>
                  {stack}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile View More */}
        <div className="md:hidden text-right text-sm text-red-400 pr-[2px]">
          see more
        </div>
      </div>
    </Link>
  );
}
