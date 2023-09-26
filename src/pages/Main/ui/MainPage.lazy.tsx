import React from "react";

const MainPageLazy = React.lazy(async () => await import("./MainPage"));

export { MainPageLazy };
