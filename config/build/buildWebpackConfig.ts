import webpack from "webpack";

import { BuildOptions } from "./types";
import { buildPlugins } from "./plugins";
import { buildLoaders } from "./loaders";
import { buildResolvers } from "./resolvers";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { entry, build } = options.paths;

  return {
    mode: options.mode,
    entry,
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true,
    },
    plugins: buildPlugins(options.paths),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
