import React from 'react';

export const Template = ({task}) => {

		return (
<div className="todo__task">
		<input className="todo__checkbox" type="checkbox"/>
		<label className="todo__label">{task}</label>
		<div className="todo__time"></div>
		<div className="todo__plus todo__plus_rotate -delet"></div>
</div>
		)
}
