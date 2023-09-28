import type { Config } from "jest";
import path from "path";

const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],

  rootDir: path.join(__dirname, "..", ".."),
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/?(*.)(spec|test).ts?(x)"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.(s?css)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/config/jest/jestEmptyComponent.tsx",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
