module.exports = {
  "extends": [
    "airbnb-typescript/base",
    "hughx",
  ],
  "parserOptions": {
    "tsconfigRootDir": process.cwd(),
    "project": "tsconfig.json",
  },
  "rules": {
    "@typescript-eslint/no-console": "off",
    "@typescript-eslint/no-param-reassign": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/class-methods-use-this": "off",
    "@typescript-eslint/no-underscore-dangle": "off",
    "@typescript-eslint/no-plusplus": "off",
    "@typescript-eslint/no-lonely-if": "off",
    "@typescript-eslint/max-len": "off",
  },
};
