import React, { Component } from 'react';
import  Task from './Task';

const TaskList = (props) => {
	const taskItems = props.tasks.map((task, index) => {
		return <Task
		onTaskSelect={props.onTaskSelect}
		onTaskDelete={props.onTaskDelete}
		key={index} task={task} />
	});

	return (
		<ul className="tasks">
			{taskItems}
		</ul>
	);

};

export default TaskList;

