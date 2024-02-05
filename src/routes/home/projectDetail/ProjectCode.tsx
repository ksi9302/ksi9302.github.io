import { useState } from "react";
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from "react-icons/fa";
import { CodeBlock, anOldHope } from "react-code-blocks";

export default function ProjectCode({
  code,
  lang,
}: {
  code: string;
  lang: string;
}) {
  const [extended, setExtended] = useState(false);
  return (
    <div className="flex flex-col w-full justify-start gap-2">
      <div
        className="mt-4 flex flex-row items-center gap-2 cursor-pointer group"
        onClick={() => setExtended(!extended)}
      >
        <h2 className="group-hover:text-red-400">Show me the code</h2>
        {extended ? (
          <FaRegCaretSquareUp className="group-hover:fill-red-400" />
        ) : (
          <FaRegCaretSquareDown className="group-hover:fill-red-400" />
        )}
      </div>
      {extended && (
        <CodeBlock
          text={code}
          language={lang}
          showLineNumbers={true}
          theme={anOldHope}
        />
      )}
    </div>
  );
}
