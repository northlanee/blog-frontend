import { Link, Route, Routes } from "react-router-dom";
import "./index.scss";
import AboutPageLazy from "./pages/About/AboutPage.lasy";
import MainPageLazy from "./pages/Main/MainPage.lazy";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
