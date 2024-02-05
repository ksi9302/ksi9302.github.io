import { useNavigate } from "react-router-dom";
import { project } from "../../../types";
import { TiArrowBack } from "react-icons/ti";
import ProjectImages from "../projects/ProjectImages";
import { FaHourglass } from "react-icons/fa";
import ProjectCode from "./ProjectCode";

export default function ProjectDetail({ project }: { project: project }) {
  const { title, code, desc, stacks, status, imgs, duration, id } = project;

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/projects");
  };

  return (
    <div className="flex-1 flex flex-col gap-2 items-center px-5 md:px-20 py-10 w-full">
      <div className="flex flex-row justify-center items-center relative w-full">
        <TiArrowBack
          className="w-7 h-7 absolute right-0 -top-1 hidden md:block cursor-pointer hover:fill-red-400"
          onClick={goBack}
        />
        <h1>{title}</h1>
      </div>
      <hr className="w-10 my-2 border-red-500" />
      <div className="relative rounded-sm w-full">
        <ProjectImages imgs={imgs} id={id} isDetailPage={true} />
      </div>

      <div className="flex flex-row justify-between items-center gap-2 w-full">
        <div className="text-sm gap-2 flex flex-row items-center">
          <FaHourglass className="w-3 h-3" /> {duration}{" "}
          <span className="text-xs">days</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div
            className="p-[5px] rounded-full mt-[2px] text-sm"
            style={{
              backgroundColor: status.color,
            }}
          />
          {status.name}
        </div>
      </div>

      <h2 className="self-start mt-2">Used Stacks</h2>
      <div className="flex flex-row flex-wrap gap-2">
        {stacks.map((stack, i) => (
          <div className="bg-red-500 px-2 py-1 rounded-sm text-sm" key={i}>
            {stack}
          </div>
        ))}
      </div>

      <h2 className="self-start mt-4">Description</h2>
      <div className="whitespace-pre-wrap">{desc}</div>

      <ProjectCode code={code} />
    </div>
  );
}
