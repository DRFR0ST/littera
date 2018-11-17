# Littera

🌐 Lightweight library making multilingualism easier.

[![Travis (.com)](https://img.shields.io/travis/com/DRFR0ST/littera.svg?style=for-the-badge)](https://travis-ci.com/DRFR0ST/littera)
[![npm](https://img.shields.io/npm/v/littera.svg?style=for-the-badge)](https://www.npmjs.com/package/littera)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react.svg?style=for-the-badge)](https://www.npmjs.com/package/littera)
[![npm](https://img.shields.io/npm/dt/littera.svg?style=for-the-badge)](https://www.npmjs.com/package/littera)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=for-the-badge)](https://gitter.im/littera-dev/)


## Install

Use `npm install littera` or clone/download the repository.

## Examples

The basic concept is that you load an object with translations for each language and then just get a string with the right translation returned adequate to the active language.

Most basic example

```javascript
// Import the library.
import Littera from "littera";

// Object containing translations for each language and key.
const translations = {
  en_US: {
    "unique.example": "Example"
  },
  pl_PL: {
    "unique.example": "Przykład"
  },
  de_DE: {
    "unique.example": "Beispiel"
  }
};

function main() {
  // Create an instance of Littera and load the translations.
  const _littera = new Littera(translations);

  // Set the active language to German (de_DE)
  _littera.setLanguage("de_DE");

  // Get the right translation for the active language using a key.
  const translation = _littera.translate("unique.example");
  console.log(translation); // Returns => Beispiel
}
```

Give it a try on _codesandbox_

[![Code Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n5wlmrwwm4)

## Build instructions

After cloning the repo, install all dependencies using `npm install`.

Build the docs:
`npm run docs`

Build the coverage:
`npm run coverage`

Test the library:
`npm test`

## API

Here comes the geeky part - [documentation](https://drfr0st.github.io/Littera/).

## License

[MIT License](https://github.com/DRFR0ST/Littera/blob/master/LICENSE)

Copyright (c) 2018 Mike Eling
