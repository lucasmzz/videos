import React from 'react';
import VideoItem from './VideoItem';
const VideoList = (props) => {

	const videos = props.videos.map((video) => {
		return <VideoItem key={video.id.videoId} video={video} />
	});
	return <div className="ui items">{videos}</div>
}

export default VideoList;