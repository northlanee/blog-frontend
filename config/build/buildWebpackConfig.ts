import webpack from "webpack";

import { BuildOptions } from "./types";
import { plugins } from "./plugins";
import { loaders } from "./loaders";
import { resolvers } from "./resolvers";
import { devServer } from "./devServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { isDev, mode, paths } = options;
  const { entry, build } = paths;

  return {
    mode,
    entry,
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true,
    },
    plugins: plugins(paths),
    module: {
      rules: loaders(options),
    },
    resolve: resolvers(paths),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? devServer(options) : undefined,
  };
};
