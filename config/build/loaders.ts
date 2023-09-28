import webpack from "webpack";
import { BuildOptions } from "./types";
import { getCssLoader } from "./loaders/cssLoader";

export const loaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = getCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  // const babelLoader = {
  //   test: /\.(js|jsx|ts|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: "babel-loader",
  //     options: {
  //       presets: ["@babel/preset-env"],
  //       // plugins: [
  //       //   [
  //       //     "i18next-extract",
  //       //     { locales: ["en", "us"], keyAsDefaultValues: true },
  //       //   ],
  //       // ],
  //     },
  //   },
  // };

  return [svgLoader, fileLoader, cssLoader, typescriptLoader];
};
