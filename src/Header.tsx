import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="pt-8 px-4">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src="/logo-no-bg.png" alt="logo" className="w-12 saturate-0" />
          <div className="text-gray-400">
            PETER.K <span className="text-red-500">as</span> code_factory
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-end items-center gap-4">
          <Link to="/contact">
            <div className="hover:animate-pulse hover:underline">ABOUT</div>
          </Link>
          <Link to="/contact">
            <div className="hover:animate-pulse hover:underline">CONTACT</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
