import React from 'react';
import { Link } from 'react-router-dom';

function ItemImage(props) {
	const { id, snippet } = props;
	
	let urlImg 		= snippet.thumbnails.medium.url;
	let title 		= snippet.title;
	let urlVideo 	= id.videoId;

	return (
		<Link to={`/${urlVideo}`}>
			<img src={urlImg} alt={title} />
		</Link>
	)
}

export default ItemImage;