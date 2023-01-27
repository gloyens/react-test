import logo from './logo.svg';
import './App.css';

// Components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
// Hooks
import { useState, useEffect } from 'react';
// Packages
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false); // AddTask form hidden by default

  // Add Task
  const addTask = (task) => {
    const id = uuidv4();
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
    Swal.fire({
      icon: "success",
      title: "Nice!",
      text: "You have successfully added a new task!"
    })

    localStorage.setItem("taskAdded", JSON.stringify([tasks, newTask]));
  }

  // Delete Task
  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id); // Filter only the tasks that don't match the specified id
    setTasks(deleteTask);
    Swal.fire({
      icon: "success",
      title: "Bye bye!",
      text: "You just deleted a task!"
    })

    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
  }

  // Edit Task
  const editTask = (id) => {
    const text = prompt("Task Name");
    const day = prompt("Day and time");
    const myData = tasks.map(x => {
      if (x.id === id) {
        return {
          ...x,
          text: text,
          day: day,
          id: uuidv4()
        }
      }
      return x;
    })
    Swal.fire({
      icon: "success",
      title: "Nice!",
      text: "You have successfully updated the task!"
    })

    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();
  }

  // Loading spinner
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])


  // Fetch tasks from local storage
  const getTasks = JSON.parse(localStorage.getItem("taskAdded"));
  useEffect(() => {
    if (getTasks == null) {
      setTasks([])
    } else {
      setTasks(getTasks);
    }
  }, [])

  return (
    <div>
      {
        loading ?
          <div className="spinnerContainer">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
          </div> :
          <div className="container">
            {/* App Header */}
            <Header
              showForm={() => setShowAddTask(!showAddTask)}
              changeTextAndColour={showAddTask}
            />
            {/* Revealing the Add Task form */}
            {showAddTask && <AddTask onSave={addTask} />}
            {/* Task Counter */}
            <h3>Number of tasks: {tasks.length}</h3>

            {/* Displaying tasks */}
            {
              tasks.length > 0 ?
                (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />) :
                ("No task found!")
            }
          </div>
      }
    </div>
  );
}

export default App;
