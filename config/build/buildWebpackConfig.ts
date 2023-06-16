import { BuildOptions } from "./types/config";
import webpack from "webpack";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { buildLoaders } from "./buildLoaders";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    resolve: buildResolves(),
    module: {
      rules: buildLoaders(),
    },
  };
}
