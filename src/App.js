import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import VideoList from './screens/VideoList';
import VideoItem from './screens/VideoItem';
// import NotFoundPage from './screens/NotFoundPage';

class App extends Component {
	render() {
		return (
			<React.Fragment>		
				<Route exact	path="/"		component={VideoList} />
				<Route			path="/:id"		component={VideoItem} />
			</React.Fragment>
		);
	}
}

export default App;
