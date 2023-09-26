import React from "react";

const AboutPageLazy = React.lazy(async () => await import("./AboutPage"));

export { AboutPageLazy };
