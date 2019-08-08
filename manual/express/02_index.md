## create index.js 

```bash
$ touch src/index.js
```

## index.js

```javascript
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

```

## package.json

```json
{
  ...
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  ...
  "devDependencies": {
    "nodemon": "^1.19.1"
  }
}

```

## terminal

```bash
$ npm run dev
```