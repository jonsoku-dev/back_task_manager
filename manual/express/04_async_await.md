# before
```javascript
const express = require("express");
// database access
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/users", (req, res) => {
  const users = User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  const user = User.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ msg: `not found user no.${_id}` });
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.state(201).send(task);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get("/tasks", (req, res) => {
  const tasks = Task.find({})
    .then(tasks => {
      res.send(tasks);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  const task = Task.findById(_id)
    .then(task => {
      if (!task) {
        return res.status(404).send({ msg: `not found task no.${_id}` });
      }
      res.send(task);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

```

# after
```javascript
const express = require("express");
// database access
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send({ msg: "not found user" });
    }
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).send(tasks);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

```