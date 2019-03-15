import React from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends React.Component {

 	constructor(props){
		super(props);
		this.state = {
			phone: {}
		}		
	}

	componentDidMount() {
		const currentId = this.props.location.pathname;
		this.setState( { currentId: currentId});
	}

	render() {
		const { currentId } = this.state;
		
		return (
			<React.Fragment>
				<div className="video-box">		
					<iframe 
						width="560" height="315" 
						src={`https://www.youtube.com/embed/${currentId}`}
						frameBorder="0" allow="autoplay; encrypted-media" 
						allowFullScreen
						title="youtube">
					</iframe>
				</div>
				<div className="text-center">
					<Link to="/" className="button">
						Вернуться к списку
					</Link>
				</div>
			</React.Fragment>
		)
	}
}

export default VideoItem;

