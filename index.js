module.exports = {
  "extends": [
    "airbnb-typescript/base",
    "hughx/base",
  ],
  "parserOptions": {
    "tsconfigRootDir": process.cwd(),
    "project": "tsconfig.json",
  },
  "rules": {
    /*
      The general strategy here is to amend plain JavaScript rules for TypeScript compatibility,
      and turn off rules which are redundant under @typescript-eslint, so the developer is not
      bombarded with multiple of the same warning/error. Note that not all eslint rules are
      redundant as @typescript-eslint does not cover 100% of the same ruleset:
      https://github.com/typescript-eslint/typescript-eslint#can-i-use-all-of-the-existing-eslint-plugins-and-rules-without-any-changes
    */
    "no-unused-vars": "off",
    "no-use-before-define": "off", // Workaround for false positive; handled by @typescript-eslint/no-use-before-define
    "@typescript-eslint/no-console": "off",
    "@typescript-eslint/no-param-reassign": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/class-methods-use-this": "off",
    "@typescript-eslint/no-underscore-dangle": "off",
    "@typescript-eslint/no-plusplus": "off",
    "@typescript-eslint/no-lonely-if": "off",
    "@typescript-eslint/max-len": "off",
  },
  "settings": {
    "import/resolver": {
      "typescript": {},
    },
  },
};
