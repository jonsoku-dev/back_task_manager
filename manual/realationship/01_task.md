## models/task.js
```javascript
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

```

## routers/task.js
```javascript
const Task = require("./models/task");

const main = async () => {
  const task = await Task.findById("5d4dd5f76899d6093a0c532b");
  //owner 정보를 가져온다 -> task 모델에서 ref 로 연결한 User schema에서 꺼내오는듯.
  await task.populate("owner").execPopulate();
  console.log(task.owner);
};

main();
```