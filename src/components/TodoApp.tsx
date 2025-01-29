import React from 'react';
import { useState } from 'react';

const TodoApp = () => {
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

export default TodoApp;
