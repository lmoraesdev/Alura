module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["airbnb-base"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		extends: ["airbnb", "prettier", "plugin:node/recommended"],
		plugins: ["prettier"],
		rules: {
			"prettier/prettier": "error",
			"no-unused-vars": "warn",
			"no-console": "off",
			"func-names": "off",
			"no-process-exit": "off",
			"object-shorthand": "off",
			"class-methods-use-this": "off",
		},
	},
};
