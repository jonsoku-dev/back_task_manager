# Sanitization (정화?)

## User model

```javascript
const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invaild!");
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    }
  }
});

const user = new User({
  name: "   kazuko   ",
  email: " the2792@gmail.com  "
});

user
  .save()
  .then(() => console.log(user))
  .catch(error => console.log(error));
```

## result

```bash
db git:(master) ✗ node mongoose.js

{ age: 0,
  _id: 5d4b41e3606095161228a54c,
  name: 'kazuko',
  email: 'the2792@gmail.com',
  __v: 0 }
```

## 정리

1. trim : true -> 양 옆 빈공간을 자동으로 지워줌
2. lowercase : true -> 모두 소문자로
3. uppercase : true -> 모두 대문자로
