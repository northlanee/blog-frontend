import { getCssLoader } from "../build/loaders/cssLoader";
import { BuildPaths } from "../build/types";
import path from "path";
import webpack from "webpack";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    build: "",
    html: "",
    root: path.join(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths?.root || "");
  config.resolve?.extensions?.push(".ts", "tsx");

  config.resolve = {
    ...config.resolve,
    alias: {
      "@": paths.root,
    },
  };

  config.module?.rules?.push(getCssLoader());

  const rules = config.module?.rules?.map((rule: webpack.RuleSetRule) => {
    if (/.svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }

    return rule;
  });

  config.module = { ...config.module, rules };

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
