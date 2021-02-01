import React, { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
import '@brainhubeu/react-carousel/lib/style.css';
import './Popular.css'
import ReactPlayer from "react-player";

class Popular extends Component {
	serviceImage = (name, description, url) => {
		return (
			<div className="Logo" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'Mainsearch/jose.png'})`}}>
				<h2 className="Logo-h2">{name}</h2>
				<p className="Logo-p">{description}</p>
				<ReactPlayer
					className='react-player'
					url={url}
					muted={true}
					playing={true}
					width="100%"
					height="100%"
				/>
		</div>
		)
	}

	render() {
		return (
			<div className="Popular">
			    <h2 className="Popular-h2">Servicios Populares</h2>
			    <Carousel
			      autoPlay={3000}
			      stopAutoPlayOnHover
			      offset={50}
			      arrowLeft={<Icon className="icon-example" name="arrow-left" />}
			      arrowRight={<Icon className="icon-example" name="arrow-right" />}
			      addArrowClickHandler
			    >
				{this.props.services.map(service => {
					return this.serviceImage(service["name"], service["description"], service["url"])
				})}
			    </Carousel>
			</div>
		)
	}
}

export default Popular;
