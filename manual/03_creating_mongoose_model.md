# Create a Task Model

## Add this code on mongoose.js

```javascript
const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const task = new Task({
  description: "Go to Work",
  completed: false
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch(error => console.log("error!", error));
```

## required

```javascript
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
});

// nothing
const user = new User({});

user
  .save()
  .then(() => console.log(user))
  //error!
  .catch(error => console.log(error));
```

## required error

```bash
errors:
   { name:
      { ValidatorError: Path `name` is required.
```

## validator (before not npm install validator)

```javascript
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
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
  age: "asd"
});
```

## validator error

```bash
node mongoose.js
{ ValidationError: User validation failed: age: Cast to Number failed for value "asd" at path "age"
```
