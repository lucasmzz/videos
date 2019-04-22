import React from 'react';

const VideoItem = (props) => {

	return(
		<div className="item">
			<div className="image">
				<img src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.description}/>
			</div>
			<div className="content">
		      <a href="/" className="header">{props.video.snippet.title}</a>
		      <div className="description">
		        <p>{props.video.snippet.description}</p>
		      </div>
		    </div>
		</div>
	);
}

export default VideoItem;