import webpack from "webpack";
import { BuildPaths } from "./types";

export const resolvers = (paths: BuildPaths): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.root, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": paths.root,
    },
  };
};
