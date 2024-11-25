import React, { useState } from "react";

const TaskItem = ({ task, onUpdateTask, onDeleteTask, onToggleCompletion }) => {
  // Check if the required props are passed in
  if (!onUpdateTask || !onDeleteTask || !onToggleCompletion) {
    console.error("Missing required props in TaskItem:", {
      onUpdateTask,
      onDeleteTask,
      onToggleCompletion,
    });
  }

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (onUpdateTask) {
      onUpdateTask(editedTask);  // Pass the updated task back to the parent
    }
    setIsEditing(false);  // Exit edit mode
  };

  const handleCancel = () => {
    setIsEditing(false);  // Exit edit mode without saving changes
    setEditedTask(task);  // Reset the task to the original state
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleEditChange}
            placeholder="Task Name"
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
            placeholder="Task Description"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => onToggleCompletion(task.id)}>
            {task.completed ? "Unmark" : "Complete"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
