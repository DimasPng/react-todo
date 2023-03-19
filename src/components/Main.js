import React, {useEffect, useState} from 'react';
import {Form} from './Form';
import {FinishTasks} from './FinishTasks';

export const Main = () => {
		const [inputHigh, setInputHigh] = useState('')
		const [inputLow, setInputLow] = useState('')

		const [tasks, setTasks] = useState([])

		const addTodo = (todo) => {
				setTasks([...tasks, todo])
		}

		const dataLs = JSON.parse(localStorage.getItem('tasks'))

		useEffect(() => {
				if (!dataLs)
				localStorage.setItem('tasks', JSON.stringify(tasks))
		}, [tasks])

		const dataFilter = (status) => {
				return dataLs.filter(item => item.priority === status)
		}

		return (
					<main className="page">
							<div className="page__todo todo">
									<div className="todo__container">
											<div className="todo__block">
													<Form id={'high'}
													      input={inputHigh}
													      setInput={setInputHigh}
													      addTodo={addTodo}
													      data = {dataFilter('high')}
													/>
													<Form id={'low'}
													      input={inputLow}
													      setInput={setInputLow}
													      addTodo={addTodo}
													      data={dataFilter('low')}
													/>
											</div>
									</div>
							</div>
							<FinishTasks/>
					</main>
		)
}