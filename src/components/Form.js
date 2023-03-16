import React from 'react';
import {Template} from './Template';
import {Alert} from './Alert';
export const Form = (props) => {

		const title = props.id[0].toUpperCase() + props.id.slice(1)
		const dateLS = JSON.parse(localStorage.getItem('tasks'))

		const handler = (e) => {
				e.preventDefault()
				props.addTodo({id: String(Date.now()), task: props.input, status: 'todo', priority: props.id})
				props.setInput('')
		}

		return (
					<div className="todo__priority" data-priority={props.id}>
							<div className="todo__title">
									{title}
							</div>
							<div className="todo__tasks">
									<form className="todo__addtask" onSubmit={(e)=>(handler(e))} id={`form_${props.id}`}>
											<input type="text"
											       placeholder="Добавить важных дел"
											       className="todo__add"
											       id={`input_${props.id}`}
											       value={props.input}
											       onChange={(e) => props.setInput(e.target.value)} />
											<button type="submit" className="todo__plus" id={`button__${props.id}`}></button>
									</form>
									<div className="todo__list" id={`list__${props.id}`}>
											{/* начиная с тега ul не работает нормально нужно разбираться */}
											<ul>
											{dateLS ? dateLS.map((item) => (
																	<Template id={item.id} task={item.task} priority={item.priority} status={item.status}/>
														)) : 2+1.
											}
											</ul>
											<Alert/>
									</div>
							</div>
					</div>
		)
}