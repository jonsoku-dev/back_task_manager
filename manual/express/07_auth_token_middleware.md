# auth token middleware 

## src/middleware/auth.js
```javascript
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log(token);
  } catch (err) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
```
> 토큰은 헤더에 등록이 되어있다.