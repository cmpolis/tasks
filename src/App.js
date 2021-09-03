// import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'First task',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Buy groceries',
      day: 'Feb 5h at 3:30pm',
      reminder: false,
    }
  ])

  // fn to remove tasks - passed down to 'X' icon
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  // Toggle Reminder state
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder }
      : task));
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000);
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title="baz" />
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : <p>No tasks to show</p>}
        <AddTask onAdd={addTask} />
    </div>
  );
}

export default App;
