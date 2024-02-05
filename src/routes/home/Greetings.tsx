import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Greetings() {
  return (
    <div className="px-10 pt-20 pb-10 md:py-52 flex flex-col justify-center items-center gap-2 md:gap-4">
      <TypeAnimation
        sequence={["Hi,", 200, "Hi, I'm Peter.K"]}
        className="text-2xl md:text-6xl"
        wrapper="h1"
        cursor={false}
      />
      <div className="text-sm italic text-gray-400">Web|App Developer</div>
      <Link to="/contact">
        <div className="rounded-sm shadow-lg px-4 py-2 outline-1 bg-slate-950 outline-slate-700 text-sm md:text-md hover:animate-pulse hover:brightness-150">
          <span className="text-gray-400 mr-6">1</span>
          <span className="text-red-500">hire</span> Peter.K --now
        </div>
      </Link>
    </div>
  );
}
