import React from 'react';

const VideoItem = ({video,onVideoSelect}) => {

	return(
		<div onClick={() => onVideoSelect(video)} className="item">
			<div className="image">
				<img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
			</div>
			<div className="content">
		      <h3 className="header">{video.snippet.title}</h3>
		    </div>
		</div>
	);
}

export default VideoItem;