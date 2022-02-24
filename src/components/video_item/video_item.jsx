import React from 'react';

const VideoItem = (props) => {
	console.log(props.video);
	return(
		<li>{props.video.snippet.title}</li>
	)
}

export default VideoItem;