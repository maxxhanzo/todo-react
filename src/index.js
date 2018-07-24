import React, { Component } from 	'react';
import ReactDOM 			from 	'react-dom';
import EnterTask 			from 	'./components/enterTask';
import TaskList 			from 	'./components/taskList';

import '../css/style.css';



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
        this.handleTaskEnter = this.handleTaskEnter.bind(this);
        this.handleTaskSelect = this.handleTaskSelect.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
	}

	handleTaskEnter(task) {
		this.setState({
			list: [...this.state.list, {id: generateUID(), todo: task, checked: false}]
		})
	}

	handleTaskSelect(selectedTask) {
		let arr = this.state.list.slice();
		let index = arr.map(e => e.id).indexOf(selectedTask.id);
		arr[index].checked = arr[index].checked ? false : true;
		this.setState({
			list: arr
		})
	}

	handleTaskDelete(taskToDelete) {
		let arr = this.state.list.slice();
		let index = arr.map(e => e.id).indexOf(taskToDelete.id);
		arr.splice(index, 1);
		this.setState({
			list: arr
		})
	}




	componentWillMount(){
		fetch("../api/todos")
			.then(res => res.json())
			.then(
			(result) => {
				this.setState({
					list: result.data
				});
				console.log(result.data);
			},
			(error) => {
				console.log("error")
			}
			)

	}

	render () {

		fetch("../api/todos", {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
						data: this.state.list
						})
		}).then(res => res.json())
		  .then((data) => {
		    console.log(data);
		  },
		  (error) => {
		  	console.log(error.message)
		  });



		return (
			<div className="main">
				<EnterTask
					onTaskEnter={this.handleTaskEnter}
				/>
				<TaskList
					tasks={this.state.list}
					onTaskSelect={this.handleTaskSelect}
					onTaskDelete={this.handleTaskDelete}
				/>
			</div>
			)
	}
}


ReactDOM.render(<App />, document.querySelector(".container"))
