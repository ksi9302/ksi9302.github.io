import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./Header";

function App() {
  return (
    <div className="bg-slate-900 flex flex-col w-screen h-screen items-center">
      <BrowserRouter>
        <div className="flex-1 w-full max-w-screen-2xl">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
