import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildPaths } from "./types";

export const plugins = ({
  html,
}: BuildPaths): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
};
