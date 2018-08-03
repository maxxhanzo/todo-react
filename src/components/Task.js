import React from 'react';

const Task = ({task, onTaskSelect, onTaskDelete}) => {
	return (
	    <li onClick={()=>onTaskSelect(task)}
	    className={`task-single ${task.checked?"checked":""}`}>
	    {task.todo}
	    <a className="deleteButton"
	    onClick={
	    	(e)=>{
	    		e.preventDefault();
	    		e.stopPropagation();
	    		onTaskDelete(task);
	    	}
	    }
	    >delete</a></li>
	);
}

export default Task;
