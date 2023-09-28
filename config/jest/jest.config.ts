import type { Config } from "jest";
import path from "path";

const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  rootDir: path.join(__dirname, "..", ".."),
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/?(*.)(spec|test).ts?(x)"],
};

export default config;
