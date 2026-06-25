import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import { fileURLToPath } from "node:url";
import path from "node:path";
import tseslint from "typescript-eslint";

export default defineConfig({
  files: ["**/*.ts", "**/*.tsx"],
  ignores: [
    "**/utils/node-scripts/fuse-react-message.js",
    "**/components/tiptap/**",
    "**/.next/**",
  ],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
    },
  },
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    "unused-imports": eslintPluginUnusedImports,
    react: eslintPluginReact,
    "react-hooks": eslintPluginReactHooks,
    "react-refresh": eslintPluginReactRefresh,
    prettier: eslintPluginPrettier,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    // Eslint
    ...eslint.configs.recommended.rules,
    // TypeScript
    ...tseslint.configs.recommended.reduce(
      (acc, config) => ({ ...acc, ...config.rules }),
      {},
    ),
    ...tseslint.configs.stylistic.reduce(
      (acc, config) => ({ ...acc, ...config.rules }),
      {},
    ),
    // React
    ...eslintPluginReact.configs.flat.recommended.rules,
    ...eslintPluginReact.configs.flat["jsx-runtime"].rules,
    ...eslintPluginReactHooks.configs.recommended.rules,
    // Prettier
    ...eslintPluginPrettierRecommended.rules,
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        arrowParens: "always",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 90,
        proseWrap: "preserve",
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
        singleAttributePerLine: true,
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
    quotes: [
      "warn",
      "single",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "function", next: "*" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "if", next: "*" },
      { blankLine: "always", prev: "*", next: "function" },
    ],
    "no-console": ["error", { allow: ["error"] }],
    "import/no-cycle": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/default": "off",
    "import/no-unresolved": "off",
    "operator-linebreak": "off",
    "no-param-reassign": "off",
    "implicit-arrow-linebreak": "off",
    "max-len": "off",
    indent: "off",
    "no-shadow": "off",
    "arrow-parens": "off",
    "no-confusing-arrow": "off",
    "no-use-before-define": "off",
    "object-curly-newline": "off",
    "function-paren-newline": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",

    // Unused imports
    "unused-imports/no-unused-imports": "error",

    // TypeScript
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["off"],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-empty-object-type": "off",

    // React
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-wrap-multilines": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/jsx-pascal-case": "off",
    "react-refresh/only-export-components": "warn",
    "react-hooks/set-state-in-effect": "off",
    "react-hooks/incompatible-library": "off",

    "no-useless-constructor": "off",
    "no-tabs": "off",
    "no-underscore-dangle": "off",
    "no-restricted-exports": ["off", { restrictedNamedExports: ["default"] }],
    "import/no-import-module-exports": "off",
    "import/no-extraneous-dependencies": "off",
    camelcase: "off",
    "@next/next/no-img-element": "off",
  },
});
