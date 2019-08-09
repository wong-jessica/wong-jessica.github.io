import React, { Component } from 'react';
import '../styles/home.css';

class Home extends Component {

	render() {
		const { homeData } = this.props;
		const greeting = homeData.greeting;
		const description = homeData.rotatingDescription[0];

		return (
			<div className="section section-home">
				<div className="section-background-color"></div>
				<div className="section-background" style={{backgroundImage: `url(${homeData.background})`}}></div>
				<div className="greeting center">
					<h3 className="subtitle">{greeting}</h3>
					<h1 className="title">{description}</h1>
				</div>
				<a href="#1" className="scroll-down center"><i className="fa fa-chevron-down fa-3x"></i></a>
			</div>
		)
	}
}

export default Home;