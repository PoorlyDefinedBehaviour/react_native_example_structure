module.exports = api => {
  api.cache(true)
  return {
    presets: ["babel-preset-expo", "@babel/preset-env"],
    plugins: [
      [
        "@babel/plugin-proposal-pipeline-operator",
        { proposal: "minimal" },
      ],
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
    ],
  }
}
