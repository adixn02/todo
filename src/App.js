import { useState } from 'react';
import './App.css';
import Task from './components/task';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './utils/slice/todoslice';


function App() {
  let [inputv,setInputv] =useState("")
  // let [task,setTask] = useState([])

  const todoItems = useSelector(store => store.todo.list)
  

  const dispatch = useDispatch()

  const handleAddTask =()=>{
    dispatch(addTask(inputv))
    // console.log(ite)
    setInputv("")
  }

  return (
  
    <div className="App">
      <h1>todo</h1>
      <div className='todoconatiner'>
        <div>
          <input type='text' value={inputv} onChange={(e)=>{
            setInputv(e.target.value)
          }}/>
          <button onClick={()=>{
            handleAddTask()
            
          }}>add task</button>
        </div>
      </div>
      <Task todoItems={todoItems}/>

    </div>

  );
}

export default App;
