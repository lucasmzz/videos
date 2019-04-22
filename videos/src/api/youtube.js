import axios from 'axios';

export default axios.create({
	baseUrl: `https://www.googleapis.com/youtube/v3/search?
					part=snippet
					&order=viewCount
					&q=skateboarding+dog
					&type=video
					&videoDefinition=high
					&key=AIzaSyCd2FRXrDqrU39txSSMi9y5EqbFWVRG0rQ`
	}
);