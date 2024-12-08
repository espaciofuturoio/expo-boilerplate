import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import reactCompiler from "eslint-plugin-react-compiler";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

// npx @eslint/migrate-config .eslintrc.json
// from: https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs

export default [
	{
		ignores: [
			"dist/*",
			"node_modules",
			".pnp",
			"**/.pnp.js",
			".yarn/install-state.gz",
			"coverage",
			".next/",
			"out/",
			"build",
			"**/.DS_Store",
			"**/*.pem",
			"**/npm-debug.log*",
			"**/yarn-debug.log*",
			"**/yarn-error.log*",
			"**/.env*.local",
			"**/.vercel",
			"**/*.tsbuildinfo",
			"**/next-env.d.ts",
			"**/.expo/",
			"**/dist/",
			"**/*.jks",
			"**/*.p8",
			"**/*.p12",
			"**/*.key",
			"**/*.mobileprovision",
			"**/*.orig.*",
			"**/web-build/",
			"**/expo-env.d.ts",
			"**/labs/",
			"components/ui/",
		],
	},
	...compat.extends("expo"),
	{
		plugins: {
			"react-compiler": reactCompiler,
		},

		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
];
