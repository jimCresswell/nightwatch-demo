module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": false,
        "es6": true,
        "mocha": true,
        "node": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": false
        }
    },
    "rules": {
      "no-unused-vars": 0,
    }
};
