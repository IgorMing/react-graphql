module.exports = {
  "extends": "airbnb",
  "globals": {
    alert: true,
    document: true,
    localStorage: true,
    window: true,
    it: true,
  },
  "parser": "babel-eslint",
  "rules": {
    "arrow-parens": ["error", "always"],
    "class-methods-use-this": "off",
    "comma-dangle": ["error", "never"],
    "import-extensions": "off",
    "jsx-a11y/label-has-for": "warn",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "warn",
    "react/sort-comp": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx"
        ],
        "paths": ["src"]
      }
    }
  }
};
