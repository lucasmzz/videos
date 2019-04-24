import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {

	state = {
		videos: [],
		selectedVideo: null
	};

	componentDidMount() {
		this.onFormSubmit('maradona');
	}
	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	onFormSubmit = async (term) => {
		const response = await youtube.get('/search',{
				params: {
					q: term
				}
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar term={this.state.term} onFormSubmit={this.onFormSubmit}/>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo}/>
						</div>
						<div className="five wide column">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
						</div>
					</div>
				</div>					
			</div>
		);
	}

}

export default App;