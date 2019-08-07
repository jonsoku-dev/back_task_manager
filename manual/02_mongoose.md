# mongoose setting

## mock up

```bash
$ mkdir src/db
$ cd src/db
$ touch mongoose.js
```

## mongoose.js

```javascript
const mongoose = require("mongoose");

// task-manage-api : database name
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});
```

## Create a User table and input data

```javascript
// Create a Model
const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

// Create a data
const me = new User({
  name: "Jongseok",
  age: 27
});

// Save a data
me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error!", error);
  });
```

## full

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const me = new User({
  name: "Jongseok",
  age: 27
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error!", error);
  });
```
