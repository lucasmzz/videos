import axios from 'axios';

const KEY = 'AIzaSyCd2FRXrDqrU39txSSMi9y5EqbFWVRG0rQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY
	}
});