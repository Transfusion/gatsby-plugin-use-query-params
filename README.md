# gatsby-plugin-use-query-params

Drop in support for [`use-query-params`](https://www.npmjs.com/package/use-query-params)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install use-query-params https://github.com/Transfusion/gatsby-plugin-use-query-params
```

## Usage

### 1. Register plugin

In `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    ...otherPlugins,
    {
      resolve: "@transfusion/gatsby-plugin-use-query-params",
      options: {
        preventScrollIfIncludes: ["?"],
      },
    },
  ],
};
```

`preventScrollIfIncludes` is a list of strings, any of which if present in `window.location.search`, will prevent the scroll position from being reset. See https://github.com/alexluong/gatsby-packages/issues/33. `["?"]` prevents the scroll position from being reset if any query string with the `?` separator is present. `["key1=", "key2="]` would prevent if `key1=` or `key2=` are present.

### 2. Use `use-query-params` package as usual. Here is [its documentation](https://github.com/pbeshai/use-query-params).

```jsx
import React from "react";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";

const UseQueryParamExample = () => {
  // something like: ?x=123&foo=bar in the URL
  const [num, setNum] = useQueryParam("x", NumberParam);
  const [foo, setFoo] = useQueryParam("foo", StringParam);

  return (
    <div>
      <h1>num is {num}</h1>
      <button onClick={() => setNum(Math.random())}>Change</button>
      <h1>foo is {foo}</h1>
      <button onClick={() => setFoo(`str${Math.random()}`)}>Change</button>
    </div>
  );
};

export default UseQueryParamExample;
```

## License

MIT
