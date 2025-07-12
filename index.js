#!/usr/bin/env node
import { program } from "commander";
import inquirer from "inquirer";
import {
  createTask,
  listDoneTodos,
  listInProgressTodos,
  listTodos,
  listTodoTodos,
  updateTask,
  updateTodoStatus,
} from "./helper.js";
const questions = [
  {
    type: "input",
    name: "title",
    message: "to do title",
  },
  {
    type: "input",
    name: "description",
    message: "to do description",
  },
];

const updateQuestions = [
  {
    type: "input",
    name: "title",
    message: "to do title",
  },
  {
    type: "input",
    name: "description",
    message: "to do description",
  },
];

const updateStatus = [
  {
    type: "input",
    name: "status",
    message: "to do status",
  },
];
program
  .version("1.0.0")
  .name("task manager")
  .description("an application to manage your tasks");

program
  .command("add")
  .alias("a")
  .description("add todo")
  .action(() => {
    inquirer.prompt(questions).then((answers) => createTask(answers));
  });

program
  .command("update <id>")
  .alias("u")
  .description("update todo")
  .action((id) => {
    inquirer
      .prompt(updateQuestions)
      .then((answers) => updateTodoStatus(id, answers));
  });

program
  .command("change-status <id>")
  .alias("us")
  .description("update todo status")
  .action((id) => {
    inquirer.prompt(updateStatus).then((answers) => updateTask(id, answers));
  });

program
  .command("list")
  .alias("ls")
  .description("list your todos")
  .action(() => listTodos());

program
  .command("list-done")
  .alias("ls-d")
  .description("list done tasks")
  .action(() => listDoneTodos());

program
  .command("list-todo")
  .alias("ls-t")
  .description("list done tasks")
  .action(() => listTodoTodos());

program
  .command("list-progress")
  .alias("ls-p")
  .description("list done tasks")
  .action(() => listInProgressTodos());

program.parse(process.argv);
