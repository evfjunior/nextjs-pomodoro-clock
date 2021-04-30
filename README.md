# NextJS Template Project

This is a [Next.js](https://nextjs.org/) template project structure. It's configured for use with [TypeScript](https://www.typescriptlang.org/) and [SASS](https://sass-lang.com/) and already includes the [Standard Style Guide](https://standardjs.com/), with [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/). The packages and dependencies are managed by [Yarn](https://classic.yarnpkg.com/).

<hr>

## Instructions

- [Add TypeScript](#typescript);
- [Install and configure ESLint](#eslint);
- [Install and configure Prettier](#prettier);
- [Configure EditorConfig](#editorconfig);
- [Add SASS](#sass)

<hr>

<p id="typescript">Add TypeScript:</p>

```bash
yarn add typescript @types/react @types/node
```

Don't forget to change the file extensions from `.js` to `.ts` or `.tsx`.

<hr>

<p id="eslint">Install and configure ESLint</p>

```bash
yarn add eslint -D
yarn eslint --init
```

At the last step of the ESLint configuration, you can accept and install the required peer dependencies using `npm`, but you'll have to delete your `yarn.lock` file and re-run `yarn install` again to map all installed packages. Alternatively, just ignore this step and run:

```bash
yarn add eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 @typescript-eslint/parser@latest -D
```

**I'm using the Standard Style Guide for this template. If you want to use another one, you'll have to make the corresponding changes to fit your needs.**

To configure ESLint, open `.eslintrc.json` and make sure it has all these lines:

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@types-eslint",
    "prettier/standard",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier  "],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  }
}
```

Now, create `.eslintignore`:

```
node_modules
.next
/*.js
```

<hr>

<p id="prettier">Install and configure Prettier:</p>

```bash
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```

Create a `prettier.config.js` file and add the following lines:

```javascript
module.exports = {
  arrowParams: "avoid",
  endOfLine: "auto",
  semi: false,
  singleQuote: true,
  trailingComma: "none",
};
```

<hr>

<p id="editorconfig">Configure EditorConfig</p>

```
# EditorConfig: https://editorconfig.org

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
insert_final_newline = true
indent_style = space
trim_trailing_whitespace = true
```

<hr>

<p id="sass">Finally, you can add SASS:</p>

```bash
yarn add sass -D
```

Change all `*.modules.css` files to `*.modules.scss`.

<hr>

## Copyright

&copy; 2021 - [evfjunior](https://github.com/evfjunior) and [licensed MIT](LICENSE)
