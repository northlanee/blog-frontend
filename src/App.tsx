import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import AboutPageLazy from "./pages/About/AboutPage.lasy";
import MainPageLazy from "./pages/Main/MainPage.lazy";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
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
