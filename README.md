# BEM this !

> A simple utility for conditionally joining classes together following BEM methodology

## Documentation

BEM documentation: https://getbem.com/

## Install

Install inside your project using NPM

```bash
npm install bemthis
```

## Usage

```js
import bem from "bemthis";

bem("block"); // => 'block'
bem("block", null, "modifier"); // => 'block block--modifier'
bem("block", "element"); // => 'block__bar'
bem("block", "element", { modifier: true }); // => 'block__bar block__bar--modifier'
```

or directly with sub functions

```js
import { b, e } from "bemthis";

b("block"); // => 'block'
b("block", { modifier: true, other: false }); // => 'block block--modifier'
b("block", ["modifier", "other"]); // => 'block block--modifier block--other'

e("block", "element"); // 'block__element'
e("block", "element", { modifier: true }); // 'block__element block__element--modifier'
```
