// import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
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
        reminder: true,
    }
])

  return (
    <div className="container">
      <Header title="baz" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
