import { useState } from 'react';
import { TasksList } from './TasksList';

const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [tasksList, setTasksList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasksList((prevTasksList) => [...prevTasksList, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (index: number) => {
    setTasksList((tasksList) => tasksList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Tasks List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TasksList tasksList={tasksList} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default TodoApp;
