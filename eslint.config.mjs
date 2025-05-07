import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("plugin:prettier/recommended", "next/core-web-vitals", "next/typescript"),

    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/jsx-no-undef": "error",
        "react/self-closing-comp": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-no-useless-fragment": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",

        "@typescript-eslint/consistent-type-imports": ["warn", {
            prefer: "type-imports",
        }],

        "no-eval": "error",
        "no-implied-eval": "error",
        "no-undef": "off",
        "no-unused-vars": "warn",
        "no-var": "error",
        "prefer-const": "error",
        "no-const-assign": "error",

        "no-console": ["warn", {
            allow: ["warn", "error"],
        }],

        "no-debugger": "warn",
        "no-alert": "error",
        "no-await-in-loop": "error",
    },
}]);
