const express = require("express");
// database access
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const main = async () => {
  const user = await User.findById("5d4dd552557e02091b51747b");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
