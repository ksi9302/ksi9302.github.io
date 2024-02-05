import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-20 w-full flex flex-col p-4 justify-center gap-4 text-sm ">
      <hr className="border-gray-700" />
      <div className="flex flex-row gap-2 px-1 md:px-16 items-center justify-between">
        <div>
          <span className="text-lg">©</span> Peter Sugin Kim 2024
        </div>
        <Link to="https://github.com/ksi9302" target="_blank">
          <div className="flex flex-row gap-2">
            <ImGithub className="w-5 h-5 hover:fill-red-400" />
            Github
          </div>
        </Link>
      </div>
    </div>
  );
}
