# Validator

## npm install

```bash
$ npm i validator
```

## require validator

```javascript
const validator = require('validator');

...

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  // use a validator
  email: {
    type: String,
    required: true,
    validate(value) {
      // isEmail() -> validator
      if (!validator.isEmail(value)) {
        throw new Error("Email is invaild!");
      }
    }
  },
  // not use a validator
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    }
  }
});

const user = new User({
  name: "kazuko",
  // not email form
  email: "the2792",
  age: 28
});
```
