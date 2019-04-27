import React from 'react';
import './SearchBar.css';
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
	transparentStyle = {
		backgroundColor: 'rgba(0, 0, 0, 0.05)'		
	};
	labelStyle = {
		fontSize: '2em',
		marginBottom: '10px'
	};
	render(){
		return (
			<div className="ui segment" style={this.transparentStyle}>
				<form onSubmit={this.onSubmit} className="ui form">
					<div className="field">
						<label style={this.labelStyle}>Video Search</label>
						<input 
							type="text"
							value={this.state.inputText} 
							onChange={this.onSearchChange} 
							className="ui fluid input"
							style={this.transparentStyle}
						/>
					</div>
				</form>
			</div>
		);
	};
};

export default SearchBar;