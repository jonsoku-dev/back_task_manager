const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  // const task = new Task(req.body);
  const task = new Task({
    ...req.body,
    owner: req.user._id
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/tasks", auth, async (req, res) => {
  try {
    await req.user.populate("tasks").execPopulate();
    res.send(req.user.tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    // const task = await Task.findById(_id);
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send({ msg: "not found task" });
    }
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every(update => {
    return allowedUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ msg: "Invalid updates !" });
  }
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send({ msg: "task not found !" });
    }
    updates.forEach(update => (task[update] = req.body[update]));
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.send(500).send(err);
  }
});
router.delete("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send({ msg: `not found task no.${id}` });
    }
    task.remove();
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
