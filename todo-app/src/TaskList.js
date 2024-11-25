import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdateTask, onDeleteTask, onToggleCompletion }) => {
  // Ensure these props are defined
  if (!onUpdateTask || !onDeleteTask || !onToggleCompletion) {
    console.error("Missing props in TaskList:", {
      onUpdateTask,
      onDeleteTask,
      onToggleCompletion,
    });
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;

