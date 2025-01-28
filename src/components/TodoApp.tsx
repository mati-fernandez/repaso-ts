import { useState } from 'react';

export const TodoApp = () => {
  const [newTask, setNewTask] = useState('');

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
      </div>
    </div>
  );
};
