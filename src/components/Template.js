import React from 'react';

export const Template = (props) => {

		return (
<li key={props.task}>{props.task}</li>
		)
}


// <template id="task-template">
//код шаблона для рендера, но выдает ошибку просит ключ
// <div className="todo__task">
// 		<input className="todo__checkbox" type="checkbox" key={props.id}/>
// 		<label className="todo__label">
// 		</label>
// 		<div className="todo__time"></div>
// 		<div className="todo__plus todo__plus_rotate -delet"></div>
// </div>
// </template>