import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "import/order": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^\\u0000", "^node:", "^@?\\w", "^", "^\\."]],
        },
      ],
      "simple-import-sort/exports": "error",
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    ignores: [
      "**/.*/",
      "/build/**",
      "/coverage/**",
      "/dist/**",
      "/docs/*",
      "/public/*",
      "/node_modules/**",
      "/tmp/**",
      ".eslintrc.cjs",
      "_worker.bundle",
      "*.config.js",
      "*.generated.*",
      "prettier.config.cjs",
    ],
  },
  eslintConfigPrettier,
];
