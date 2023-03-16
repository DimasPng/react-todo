import React from 'react';

export const FinishTasks = () => {
		return (
					<div>
							<section className="finishedTasksPreview">
									<h2 className="finishedTasksPreview_header" id="title">Завершенные задачи</h2>
							</section>
							<section className="finishedTasks hidden">
									<h2 className="finishedTasks_header">Завершенные задачи</h2>
									<div id="list__done"></div>
									<div className="finishedTasks__messageEmptyList">Нет завершенных задач.</div>
							</section>
					</div>
		)
}