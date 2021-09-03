import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

const TASKS_URL = 'http://localhost:5000/tasks';
function urlForTaskId(id) {
  return `${TASKS_URL}/${id}`;
}

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: 'First task',
    //   day: 'Feb 6th at 1:30pm',
    //   reminder: true,
    // },
    // {
    //   id: 2,
    //   text: 'Buy groceries',
    //   day: 'Feb 5h at 3:30pm',
    //   reminder: false,
    // }
  ])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }

    getTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch(TASKS_URL);
    return await res.json();
  }

  const fetchTask = async (id) => {
    const res = await fetch(urlForTaskId(id));
    return await res.json();
  }

  // fn to remove tasks - passed down to 'X' icon
  const deleteTask = async (id) => {
    await fetch(urlForTaskId(id), {method: 'DELETE'});
    setTasks(tasks.filter((t) => t.id !== id));
  }

  // Toggle Reminder state
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(urlForTaskId(id), {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: data.reminder }
      : task));
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(TASKS_URL, 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 100000);
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask])
  }

  return (
    <Router>
      <div className="container">
        <Header title="baz" showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
        <Route path='/' exact render={(props) => (
          <>
           {showAddTask && <AddTask onAdd={addTask} />}
           {tasks.length > 0 ?
             (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
             : <p>No tasks to show</p>}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
