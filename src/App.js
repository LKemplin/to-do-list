import './App.css';
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      task: "finish this damn assignment",
      completed: false
    }
  ])

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const toggleComplete = (task) => {
    task.completed = !task.completed;
    setTaskList([...taskList])
  }

  // I know I need to set some conditional styling for the completion toggle but I can't figure this piece out and want to get my assignment in on time.

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      <div>
        {taskList.map((task) => (
          <div key={task.id} className='tasks' style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <h3>{task.task}</h3>
            <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task)} />
            <button className='btn' onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
