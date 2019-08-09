# bcryptjs

## npm install

```bash
npm i bcryptjs
```

## basic
```javascript
const bcrypt = require("bcryptjs");

const myFunction = async () => {
  //basic
  const password = "RED123451";
  const hashedPassword = await bcrypt.hash(password, 8);
  console.log(password);
  console.log(hashedPassword);
};

myFunction();

```
## Terminal Result
```bash
RED123451
$2a$08$1wWWBpVt1wyvz2BQdgJYTu8cCHncescDs2EvHSR1MtcJ4Al6Qg9aG
```

## compare
```javascript
const bcrypt = require("bcryptjs");

const myFunction = async () => {
  //basic
  const password = "RED123451";
  const hashedPassword = await bcrypt.hash(password, 8);
  console.log(password);
  console.log(hashedPassword);

  //compare
  const isMatch = await bcrypt.compare("RED123451", hashedPassword);
  console.log(isMatch);
};

myFunction();

```

## Terminal Result
```bash
RED123451
$2a$08$1wWWBpVt1wyvz2BQdgJYTu8cCHncescDs2EvHSR1MtcJ4Al6Qg9aG
true
```