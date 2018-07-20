import React, { Component } from 'react';

class EnterTask extends Component {
	constructor(props){
		super(props);
		this.state = { item: '' }
	}
	render () {
		return (
				<div>
					<input
						// value={this.state.item}
//						onChange={(event) => {
//							console.log(event.target.value)
//							this.setState({item: event.target.value});
//						}}

						onKeyPress={(event)=>{
							if(event.key === "Enter"){
								this.props.enter("test")
							}
						}}

						/>
						Value of the input: {this.state.item}
				</div>

			)
	}

	// (event) => {
	// 	console.log(event.target.value)
	// 	this.setState({item: event.target.value});
	// }
}

export default EnterTask;
