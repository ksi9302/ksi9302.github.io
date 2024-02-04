import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import Header from "./Header";
import ProjectDetail from "./routes/home/projectDetail/projectDetail";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="bg-slate-900 flex flex-col w-screen h-screen items-center overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-slate-500 md:scrollbar-track-slate-900">
      <BrowserRouter>
        <div className="flex-1 w-full max-w-screen-2xl flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:title" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
