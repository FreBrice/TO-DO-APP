import { useState } from 'react';

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName('');
  };

  return (
    <form onSubmit = {handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        
        onChange={(e) => console.log(e.target.value)}
      />
      <button>Save Task</button>
    </form>
  );
};
