import { Link } from "react-router-dom";
import { project } from "../../../types/types";
// import { CodeBlock, dracula } from "react-code-blocks";

interface props {
  project: project;
}

export default function Project({ project }: props) {
  const { title, photo, desc, status, usedStacks } = project;

  return (
    <Link to={`/project/${title}`}>
      <div className="group relative rounded-sm">
        {/* BG Img */}
        <img
          src={`/projects/${photo}`}
          alt={photo}
          className="brightness-100 group-hover:brightness-[0.25] transition-all rounded-sm"
        />
        {/* Body */}
        <div className="w-full h-full absolute top-0 left-0 flex flex-col rounded-sm">
          {/* Header */}
          <div className="flex flex-row justify-between p-2 bg-red-900 bg-opacity-80">
            <div>{title}</div>
            <div className="flex flex-row items-center gap-2">
              <div
                className={`p-[5px] rounded-full mt-[2px] ${
                  status === "on-going" && "bg-green-500"
                }`}
              />
              {status}
            </div>
          </div>

          {/* Desc, Code */}
          <div className="hidden flex-1 md:group-hover:flex flex-col pt-10 lg:pt-20 overflow-auto pb-5">
            <div className="whitespace-pre-wrap text-center px-5 text-sm lg:text-lg">
              {desc}
            </div>
            <div className="my-5 text-center text-red-400">made using</div>
            <div className="flex flex-row gap-2 flex-wrap px-10">
              {usedStacks.map((stack, i) => (
                <div className="bg-red-500 px-2 py-1 rounded-sm" key={i}>
                  {stack}
                </div>
              ))}
            </div>

            {/* <CodeBlock
            text={code}
            language="tsx"
            showLineNumbers={true}
            theme={dracula}
            codeContainerStyle={{ flex: 1, overflow: "clip" }}
          /> */}
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
