module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["module-resolver", {
        "alias": {
          "@Globals": "./src/globals",
          "@Navigator": "./src/navigation",
          "@ApolloClient": "./src/apollo",
          "@Components": "./src/components",
          "@Screens": "./src/screens",
          "@Data": "./src/data",
          "@Assets": "./assets"
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }],
    ]
  };
};
