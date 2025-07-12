import fs from "fs/promises";
import crypto from "crypto";

export const createTask = async (data) => {
  try {
    const newTask = {
      id: crypto.randomUUID(),
      status: "todo",
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      ...data,
    };
    let tasks = [];
    try {
      const read = await fs.readFile("tasks.json", "utf-8");
      tasks = JSON.parse(read);
      if (!Array.isArray(tasks)) tasks = [];
    } catch (err) {
      tasks = [];
    }
    tasks.push(newTask);
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), "utf-8");
    console.log("file created with id", newTask.id);
  } catch (error) {
    console.error(error);
  }
};
export const updateTask = async (id, updates) => {
  try {
    let tasks = [];
    try {
      const data = await fs.readFile("tasks.json", "utf-8");
      tasks = JSON.parse(data);
      if (!Array.isArray(tasks)) tasks = [];
    } catch (error) {
      tasks = [];
    }
    const foundIndex = tasks.findIndex((data) => data.id === id);
    if (foundIndex === -1) {
      console.log("no information for this specific todo");
      return;
    }
    const updatedTask = {
      ...tasks[foundIndex],
      updatedAt: new Date().toISOString(),
      ...updates,
    };
    tasks[foundIndex] = updatedTask;
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), "utf-8");
    console.log("task updated");
  } catch (error) {
    console.error(error);
  }
};
export const deleteTask = async (id) => {
  try {
    let data = await fs.readFile("tasks.json", "utf-8");
    let tasks = JSON.parse(data);
    if (!Array.isArray(tasks)) tasks = [];
    const initialLength = tasks.length;
    tasks = tasks.filter((task) => task.id !== id);
    if (tasks.length === initialLength) {
      console.log("no information for this specific todo");
      return;
    }
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), "utf-8");
    console.log("task deleted");
  } catch (error) {
    console.error(error);
  }
};
export const updateTodoStatus = async (id, update) => {
  try {
    let tasks = [];
    try {
      const data = await fs.readFile("tasks.json", "utf-8");
      tasks = JSON.parse(data);
      if (!Array.isArray(tasks)) tasks = [];
    } catch (error) {
      tasks = [];
    }
    const foundIndex = tasks.findIndex((data) => data.id === id);
    if (foundIndex.length === -1) {
      console.log("no information for this specific todo");
      return;
    }
    const updatedTask = {
      ...tasks[foundIndex],
      updatedAt: new Date().toISOString(),
      status: update,
    };
    tasks[foundIndex] = updatedTask;
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2), "utf-8");
    console.log(
      `the status of the task with name ${updatedTask.name} has been changed to ${updatedTask.status}`
    );
  } catch (error) {
    console.error(error);
  }
};
export const listTodos = async () => {
  try {
    const data = await fs.readFile("tasks.json");
    console.log("all your todos ", JSON.parse(data));
  } catch (error) {
    console.error(error);
  }
};
export const listDoneTodos = async () => {
  try {
    let tasks = [];
    try {
      const data = await fs.readFile("tasks.json", "utf-8");
      tasks = JSON.parse(data);
      if (!Array.isArray(tasks)) tasks = [];
    } catch (error) {
      tasks = [];
    }
    const foundTask = tasks.filter((task) => task.status === "done");
    if (foundTask.length === 0) {
      console.log("no tasks found with status done");
      return;
    }
    tasks[foundTask];
    console.log("found tasks with status sone", foundTask);
  } catch (error) {
    console.error(error);
  }
};
export const listTodoTodos = async () => {
  try {
    let tasks = [];
    try {
      const data = await fs.readFile("tasks.json", "utf-8");
      tasks = JSON.parse(data);
      if (!Array.isArray(tasks)) tasks = [];
    } catch (error) {
      tasks = [];
    }
    const foundTask = tasks.filter((task) => task.status === "todo");
    if (foundTask.length === 0) {
      console.log("no tasks found with status done");
      return;
    }
    tasks[foundTask];
    console.log("found tasks with status sone", foundTask);
  } catch (error) {
    console.error(error);
  }
};
export const listInProgressTodos = async () => {
  try {
    let tasks = [];
    try {
      const data = await fs.readFile("tasks.json", "utf-8");
      tasks = JSON.parse(data);
      if (!Array.isArray(tasks)) tasks = [];
    } catch (error) {
      tasks = [];
    }
    const foundTask = tasks.filter((task) => task.status === "in-progress");
    if (foundTask.length === 0) {
      console.log("no tasks found with status done");
      return;
    }
    tasks[foundTask];
    console.log("found tasks with status sone", foundTask);
  } catch (error) {
    console.error(error);
  }
};
