import React from 'react';

class SearchBar extends React.Component {

	state = {
		inputText: ''
	};

	onSearchChange = (event) => {
		this.setState({inputText: event.target.value});
	};

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.inputText);
	};

	render(){
		return (
			<div className="ui segment">
				<form onSubmit={this.onSubmit} className="ui form">
					<div className="field">
						<label>Video Search:</label>
						<input 
							type="text"
							value={this.state.inputText} 
							onChange={this.onSearchChange} 
							className="ui massive input" 
						/>
					</div>
				</form>
			</div>
		);
	};
};

export default SearchBar;