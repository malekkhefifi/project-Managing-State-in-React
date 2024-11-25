import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({ name: "", description: "", completed: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.trim() && task.description.trim()) {
      onAddTask({ ...task, id: Date.now() });
      setTask({ name: "", description: "", completed: false });
    } else {
      alert("Both fields are required!");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

