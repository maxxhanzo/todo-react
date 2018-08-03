import React, { Component } from 'react';

const EnterTask = (props) => {

		return (
				<div className="input-div">
					<input

						onKeyPress={(event)=>{
							if((event.key === "Enter") && (event.target.value!=="")){
								props.onTaskEnter(event.target.value);
								event.target.value = "";
							}
						}}

						/>

				</div>

			)

}

export default EnterTask;
