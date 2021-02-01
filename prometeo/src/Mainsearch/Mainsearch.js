import React, { Component } from "react";
import './Mainsearch.css';
import ReactPlayer from "react-player";

class Mainsearch extends Component {
	render() {
		return (
			<div className="Mainsearch">
			  <ReactPlayer
			        className='react-player'
				url="https://www.youtube.com/watch?v=L14QdAmPjPI&t=55s"
				muted={true}
				playing={true}
				width="100%"
				height="100%"
			  />
			  <div className="Mainsearch-div">
			      <h1 className="Mainsearch-title">Innova</h1>
			      <h2 className="Mainsearch-h2">Mejora la productividad de tu local</h2>
			  </div>
			</div>
		)
	}
}

export default Mainsearch
