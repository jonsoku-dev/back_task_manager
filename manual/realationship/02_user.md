## models/user.js

```javascript
//user id 로 불러올 때
userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner"
});
```
## routers/user.js

```javascript
const main = async () => {
  const user = await User.findById("5d4dd552557e02091b51747b");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
```

