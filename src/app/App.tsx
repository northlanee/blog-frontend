import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { AboutPage } from "@/pages/About";
import { MainPage } from "@/pages/Main";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>

      <AppRouter />
    </div>
  );
};

export default App;
