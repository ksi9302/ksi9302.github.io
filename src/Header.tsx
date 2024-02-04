import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";

export default function Header() {
  return (
    <div className="pt-4 md:pt-8 px-4 text-sm md:text-md">
      <div className="flex flex-row gap-2 items-center">
        {/* Home */}
        <Link to="/">
          <div className="flex flex-row gap-2 items-center hover:animate-pulse">
            <img
              src="/logo-no-bg.png"
              alt="logo"
              className="w-10 md:w-12 grayscale brightness-150"
            />
            <div className="text-gray-200 flex flex-row gap-2">
              PETER.K
              <div className="hidden md:flex flex-row gap-2">
                <div className="text-red-500">as</div> code_factory
              </div>
            </div>
          </div>
        </Link>
        <div className="flex-1 flex flex-row justify-end items-center gap-2 md:gap-4">
          <Link to="/about">
            <div className="hover:animate-pulse hover:text-red-400">ABOUT</div>
          </Link>
          <Link to="/contact">
            <div className="hover:animate-pulse hover:text-red-400">
              CONTACT
            </div>
          </Link>
          <Link to="https://github.com/ksi9302" target="_blank">
            <ImGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
