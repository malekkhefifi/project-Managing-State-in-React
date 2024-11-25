import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./App.css";

const App = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to update an existing task
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  // Function to toggle task completion
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Save tasks to localStorage whenever the task list changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <h1>To-Do List</h1>
      {/* Form to add a new task */}
      <TaskForm onAddTask={addTask} />

      {/* List of tasks with options for edit, delete, and toggle completion */}
      <TaskList
        tasks={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onToggleCompletion={toggleCompletion}
      />
    </div>
  );
};

export default App;


