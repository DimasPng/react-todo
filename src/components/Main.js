import React, {useState} from 'react';
import {Form} from './Form';
import {FinishTasks} from './FinishTasks';


export const Main = (props) => {

		return (
					<main className="page">
							<div className="page__todo todo">
									<div className="todo__container">
											<div className="todo__block">
													<Form id={'high'}
													      input={props.inputHigh}
													      setInput={props.setInputHigh}
													      addTodo={props.addTodo}
													/>

													<Form id={'low'}
													      input={props.inputLow}
													      setInput={props.setInputLow}
													      addTodo={props.addTodo}
													/>
											</div>
									</div>
							</div>
							<FinishTasks/>
					</main>
		)
}