import globals from "globals";
import pluginJs from "@eslint/js";


export default [

  {
    files: ["**/*.js"], languageOptions: {sourceType: "commonjs"},
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    }
  },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.rcommended,
];
