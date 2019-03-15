import React from 'react';
import axios from 'axios';

import ItemImage from '../components/ItemImage';

class PhoneList extends React.Component {
  constructor(props){
		super(props);

		this.state = {
			arr: [],
			inpVal: '',
			url: '',
			items: [],
		}
		//localStorage.clear();
		if (localStorage.getItem('isData')) {
			this.state.items = JSON.parse(localStorage.getItem("isData"));
		} 

        this.handleSubmit   = this.handleSubmit.bind(this);
        this.handleInput  = this.handleInput.bind(this);		
	}

	handleInput(e) {
		const { name, value } = e.target;
		this.setState( { [name]: value } );
    }

	handleSubmit(e) {
        e.preventDefault();
		const { inpVal } = this.state;
		let url = this.renderVideo(inpVal);

		axios(url)
		.then(response => {
			localStorage.setItem('isData', JSON.stringify(response.data.items));
			
			this.setState( { 
				videoId: response.data.items[0].id.videoId,
				items: response.data.items,
			} ); // -> render
		})
		.catch(error => console.log('error:', error));
			
	}
	
	// url video
	renderVideo = (data) => {
		return `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=${data}&type=video;`;
	}

	render() {
		console.log(this.state);
		const { inpVal, items } = this.state;

			return (
				<React.Fragment>
					<form className="wrap" onSubmit={this.handleSubmit}>
						<input type="text" className="input" placeholder="Что ищете?" name="inpVal" value={inpVal} onChange={this.handleInput} />
						<input type="submit" id="searchI" value="Искать" className="button" />
					</form>
					<div className="previews-box">
									
						{items.map((item,index) => {
											return (
											 <ItemImage {...item} key={index} handleSubmit={this.handleSubmit} />
											)
									})}
					</div>
				</React.Fragment>
			);

	}
}

export default PhoneList;