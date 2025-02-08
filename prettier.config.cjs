/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-css-order"),
  ],
  cssDeclarationSorterOrder: "concentric-css",
  tailwindFunctions: ["clsx", "cva", "classnames", "tv"],
};

module.exports = config;
