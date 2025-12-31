import nextConfig from "eslint-config-next/core-web-vitals"
import prettierConfig from "eslint-config-prettier"

const allPlugins = nextConfig.reduce((acc, config) => {
  if (config.plugins) {
    Object.assign(acc, config.plugins)
  }
  return acc
}, {})

const eslintConfig = [
  ...nextConfig,
  {
    plugins: allPlugins,
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-require-imports": "off",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  prettierConfig,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "build/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
]

export default eslintConfig
