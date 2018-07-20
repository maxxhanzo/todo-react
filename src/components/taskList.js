import React, { Component } from 'react';
//import  Task from './task';

const TaskList = function(props) {

	const tasks = props.tasks;
	const listItems = tasks.map((task) =>
	    <li>{task}</li>
	  );
	  return (
	    <ul>{listItems}</ul>
	  );
}

export default TaskList;
// <Task task={props.task}/>
