import { Link } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};

export default App;
