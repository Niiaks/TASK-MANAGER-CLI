# Task Manager CLI

A command-line task management application built with Node.js that allows you to create, update, and organize your tasks efficiently.

## Features

- ✅ Add new tasks with title and description
- 📝 Update existing tasks
- 🔄 Change task status (todo, in-progress, done)
- 📋 List all tasks
- 🎯 Filter tasks by status
- 💾 Persistent storage in JSON format

## Installation

1. Clone or download the project to your local machine
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install commander inquirer
```

## Usage

The application uses a command-line interface with various commands and aliases for quick access.

### Adding Tasks

Create a new task with interactive prompts:

```bash
node index.js add
# or use the alias
node index.js a
```

You'll be prompted to enter:

- Task title
- Task description

The task will be automatically assigned a unique ID and set to "todo" status.

### Updating Tasks

Update an existing task's title and description:

```bash
node index.js update <task-id>
# or use the alias
node index.js u <task-id>
```

Replace `<task-id>` with the actual ID of the task you want to update.

### Changing Task Status

Update only the status of a task:

```bash
node index.js change-status <task-id>
# or use the alias
node index.js us <task-id>
```

You'll be prompted to enter the new status (todo, in-progress, or done).

### Listing Tasks

#### List All Tasks

```bash
node index.js list
# or use the alias
node index.js ls
```

#### List Completed Tasks

```bash
node index.js list-done
# or use the alias
node index.js ls-d
```

#### List Todo Tasks

```bash
node index.js list-todo
# or use the alias
node index.js ls-t
```

#### List In-Progress Tasks

```bash
node index.js list-progress
# or use the alias
node index.js ls-p
```

## File Structure

- **`index.js`** - Main application file containing CLI commands and user interface
- **`helper.js`** - Core functionality and data persistence logic
- **`tasks.json`** - Automatically created file to store your tasks

## Task Structure

Each task contains the following properties:

```json
{
  "id": "unique-uuid",
  "title": "Task title",
  "description": "Task description",
  "status": "todo|in-progress|done",
  "createdAt": "2025-07-12T10:30:00.000Z",
  "updatedAt": "2025-07-12T10:30:00.000Z"
}
```

## Examples

### Creating a task:

```bash
$ node index.js add
? to do title Learn Node.js
? to do description Complete the Node.js tutorial series
file created with id 123e4567-e89b-12d3-a456-426614174000
```

### Updating a task:

```bash
$ node index.js update 123e4567-e89b-12d3-a456-426614174000
? to do title Learn Advanced Node.js
? to do description Complete advanced Node.js concepts
task updated
```

### Changing status:

```bash
$ node index.js change-status 123e4567-e89b-12d3-a456-426614174000
? to do status in-progress
task updated
```

## Help

To see all available commands:

```bash
node index.js --help
```

To see help for a specific command:

```bash
node index.js <command> --help
```

## Data Storage

Tasks are stored in a `tasks.json` file in the project directory. This file is automatically created when you add your first task. The data persists between application runs, so your tasks will be saved even after closing the application.

## Requirements

- Node.js (version 14 or higher recommended)
- npm
