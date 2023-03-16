import './App.css';
import {Template} from './components/Template';
import {Main} from './components/Main';
import {useEffect, useState} from 'react';

function App() {

const [inputHigh, setInputHigh] = useState('')
const [inputLow, setInputLow] = useState('')

const [tasks, setTasks] = useState([])

const addTodo = (todo) => {
  setTasks([...tasks, todo])
  console.log(tasks)
}
useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  return (
     <div className="wrapper">
      <Main inputHigh={inputHigh}
            setInputHigh={setInputHigh}
            inputLow={inputLow}
            setInputLow={setInputLow}
            addTodo={addTodo}
              />
     </div>
  )
}

export default App;