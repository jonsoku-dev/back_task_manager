## basic jwt

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