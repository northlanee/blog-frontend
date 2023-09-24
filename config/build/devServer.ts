import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export const devServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    open: true,
  };
};