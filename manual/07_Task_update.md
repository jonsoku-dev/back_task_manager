# Task

## Add Sanitization

```javascript
const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    // 양 옆의 여백을 지워줌.
    trim: true
  },
  completed: {
    type: Boolean,
    //default 값으로 false를 지정
    default: false
  }
});

const task = new Task({
  //여백이 있으나 result에는 "test task"로 저장될 것임
  description: "    test task"
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch(error => console.log("error!", error));
```

## Result

```bash
➜  db git:(master) ✗ node mongoose.js

{ completed: false,
  _id: 5d4b4560d3ba7618429034b1,
  description: 'test task',
  __v: 0 }
```
