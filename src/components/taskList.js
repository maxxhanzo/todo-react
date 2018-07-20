import React, { Component } from 'react';
import  Task from './task';

class TaskList extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	list: []
        }
        // updateList = updateList.bind(this);
    }

	render () {
		return (
			<div>
			</div>
		)
	}
}

export default TaskList;
// <Task task={props.task}/>
