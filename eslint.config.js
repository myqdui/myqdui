import js from "@eslint/js";
import globals from "globals";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            "**/dist/**",
            "**/node_modules/**",
            "**/.turbo/**",
            "loomas-sandbox/**"
        ]
    },
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    {
        files: ["**/*.js", "**/*.config.ts"],
        extends: [tseslint.configs.disableTypeChecked]
    },
    {
        files: ["**/*.{jsx,tsx}"],
        ...jsxA11y.flatConfigs.recommended,
        languageOptions: {
            ...jsxA11y.flatConfigs.recommended.languageOptions,
            globals: globals.browser
        }
    },
    reactHooks.configs.flat.recommended,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_"
            }],
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "no-restricted-syntax": ["error", {
                selector: "TSEnumDeclaration",
                message: "Use a const object map or union type instead of enum."
            }]
        }
    }
);
