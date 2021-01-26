import {useState} from 'react'
import Header from './componenets/Header'
import Tasks from './componenets/Tasks'
import AddTask from './componenets/AddTask'

function App() {
  const [ShowAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
        id:1,
        text : 'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text : 'Reminder 2',
        day:'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:3,
        text : 'Reminder 3',
        day:'Feb 25th at 2:30pm',
        reminder:false,
    }

])
  const addTask = (task) =>{
    //const id=Math.floor(math.random()*10000) +1
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task} 
    setTasks([...tasks,newTask])
  }

  const deletetask = (id) => {
    setTasks(tasks.filter((task) =>task.id!==id))
    console.log( 'delete' ,id)
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>
    task.id === id? {...task,reminder:!task.reminder}:task
    ))
  }

  return (
    <div className="container">
      <Header onAdd ={ ()=> setShowAddTask (!ShowAddTask) } showAdd={ShowAddTask}/>
      {ShowAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deletetask} onToggle={toggleReminder} />:'No task to show'}
    </div>
  );
}

export default App;
