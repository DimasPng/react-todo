import React from 'react';
import {Template} from './Template';
import {Alert} from './Alert';
export const Form = ({id, input, setInput, addTodo, data}) => {

		const title = id[0].toUpperCase() + id.slice(1)
		const dateLS = JSON.parse(localStorage.getItem('tasks'))

		const handler = (e) => {
				e.preventDefault()
				const newTodo = {id: String(Date.now()), task: input, status: 'todo', priority: id}
				addTodo(newTodo)
				setInput('')
				localStorage.setItem('tasks', JSON.stringify([...dateLS, newTodo]))
		}

		return (
					<div className="todo__priority" data-priority={id}>
							<div className="todo__title">
									{title}
							</div>
							<div className="todo__tasks">
									<form className="todo__addtask" onSubmit={(e)=>(handler(e))} id={`form_${id}`}>
											<input type="text"
											       placeholder="Добавить важных дел"
											       className="todo__add"
											       id={`input_${id}`}
											       value={input}
											       onChange={(e) => setInput(e.target.value)} />
											<button type="submit" className="todo__plus" id={`button__${id}`}></button>
									</form>
									<div className="todo__list" id={`list__${id}`}>
											<ul>
											{data ? data.map((item, index) => <Template key={index} task={item.task}/> ) : <Alert/>}
											</ul>
									</div>
							</div>
					</div>
		)
}