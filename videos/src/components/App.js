import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {

	state = {
		videos: []
	};

	onFormSubmit = async (term) => {
		const response = await youtube.get(`https://www.googleapis.com/youtube/v3/search?
					part=snippet
					&order=viewCount
					&q=${term}
					&type=video
					&videoDefinition=high
					&key=AIzaSyCd2FRXrDqrU39txSSMi9y5EqbFWVRG0rQ`);
		this.setState({videos: response.data.items});
	};

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar term={this.state.term} onFormSubmit={this.onFormSubmit}/>
				<VideoDetail />
				<VideoList videos={this.state.videos} />					
			</div>
		);
	}

}

export default App;