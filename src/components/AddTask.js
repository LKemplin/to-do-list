import { useState } from 'react';
import { nanoid } from 'nanoid';

const AddTask = ({ taskList, setTaskList }) => {
    const [task, setTask] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const taskObj = {
            id: nanoid(),
            task: task,
            completed: false
            }
        setTaskList([...taskList, taskObj])
        console.log(taskList)
        setTask('')
    }

    return (
    <form onSubmit={submitHandler}>
        <div>
            <label>Task</label>
            <input type="text" name="task" onChange={(e) => setTask(e.target.value)}/>
        </div>
        <button>Add</button>
    </form>
    )
    }

export default AddTask