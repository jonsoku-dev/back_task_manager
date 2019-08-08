const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).send(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send({ msg: "not found task" });
    }
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.patch("/tasks/:id", async (req, res) => {
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
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true
    });
    if (!task) {
      return res.status(404).send({ msg: "task not found !" });
    }
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.send(500).send(err);
  }
});
router.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    console.log(task);
    if (!task) {
      return res.status(404).send({ msg: `not found task no.${id}` });
    }
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
