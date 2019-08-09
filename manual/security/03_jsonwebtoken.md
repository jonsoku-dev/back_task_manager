# jsonwebtoken

## npm install

```bash
npm i jsonwebtoken
```

## basic

```javascript
const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse");
  console.log(token);
};

myFunction();

```

## verify

```javascript
const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse");
  console.log(token);
  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};

myFunction();
```

## time

```javascript
const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
    expiresIn: "10 seconds"
  });
  console.log(token);
  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};

myFunction();
```

## expiresIn : https://www.npmjs.com/package/jsonwebtoken

```
60, "2 days", "10h", "7d"
```