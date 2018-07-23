import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EnterTask from './components/enterTask';
import TaskList from './components/taskList';

import '../css/style.css';

function updateList(taskItem) {
    this.setState({
    	list: [...this.state.list, taskItem]
    })
}

function generateUID(){
	let uid = (Math.random() + 1).toString(36).substring(2,7) + new Date().getTime();
	return uid;
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
        	list: [],

        }
	}

	render () {
		return (
			<div className="main">
				<EnterTask
					onTaskEnter={task=> {
						this.setState({
								list: [...this.state.list, {id: generateUID(), todo: task, checked: false}]
							})
						}
					}
				/>
				<TaskList
					tasks={this.state.list}
					onTaskSelect={selectedTask => {
						let arr = this.state.list;
						let index = arr.map(e => e.id).indexOf(selectedTask.id);
						arr[index].checked = arr[index].checked ? false : true;
						this.setState({
								list: arr
							})
						}
					}
					onTaskDelete={taskToDelete => {
						let arr = this.state.list;
						let index = arr.map(e => e.id).indexOf(taskToDelete.id);
						arr.splice(index, 1);
						this.setState({
								list: arr
							})
						}
					}
				/>
			</div>
			)
	}
}


ReactDOM.render(<App />, document.querySelector(".container"))
