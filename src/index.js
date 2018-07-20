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

class App extends Component {
	constructor(props) {
		super(props);
		// this.state = { tasks: [] }
	}

	render () {
		return (
			<div className="main">
				hi!!!
				<EnterTask />
				<TaskList />
			</div>
			)
	}
}


ReactDOM.render(<App />, document.querySelector(".container"))
