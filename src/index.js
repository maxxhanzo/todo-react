import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EnterTask from './components/enterTask';
import TaskList from './components/taskList';

import '../css/style.css';


class App extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	list: []
        }
    }
    render () {
		return (
			<div className="main">
				<div className="input">
					<input
							// 	(e)=>{console.log(e.target.value)
						// 	this.setState({
						// 	  list: [...this.state.list, e.target.value]
						// 	})
						// 	console.log(this.state.list)
						// }



					onKeyPress={
						(e)=>{
							if(e.key === "Enter"){
									console.log("enter pressed");
									this.setState({
										list: [...this.state.list, e.target.value]
									})
									console.log(this.state.list);
									<TaskList tasks={this.state.list} />
								}
							}
						}

					/>
				</div>


			</div>
			)
	}
}


ReactDOM.render(<App />, document.querySelector(".container"))
