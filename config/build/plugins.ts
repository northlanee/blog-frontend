import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types";

export const plugins = ({
  html,
}: BuildPaths): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: html,
    }),
  ];
};
