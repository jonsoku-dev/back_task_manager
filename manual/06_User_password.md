# Add a password data column

## User model

```javascript
const User = mongoose.model("User", {

  ...

  password: {
    type: String,
    required: true,
    trim: true,
    // 최소길이 7로 지정
    minlength: 7,
    validate(value) {
      //password에 password라는 단어가 포함되면 안된다.
      if (value.toLowerCase().includes("password")) {
        throw new Error("password cannot contain 'password'");
      }
    }
  },

  ...

});

const user = new User({
  name: "   jongseok lee   ",
  email: " the2792@gmail.com  ",
  password: "       123456789             "
});

user
  .save()
  .then(() => console.log(user))
  .catch(error => console.log(error));
```

## Result

```bash
➜  db git:(master) ✗ node mongoose.js
s
{ age: 0,
  _id: 5d4b4560d3ba7618429034b0,
  name: 'JONGSEOK LEE',
  email: 'the2792@gmail.com',
  password: '123456789',
  __v: 0 }
```
