import React, { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
import '@brainhubeu/react-carousel/lib/style.css';
import './Popular.css'

const iconPath = process.env.PUBLIC_URL + '/img/';


class Popular extends Component {
	serviceImage = (name, description, imageName) => {
		return (
			<div className="Logo" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'Mainsearch/jose.png'})`}}>
				<h2 className="Logo-h2">{name}</h2>
				<p className="Logo-p">{description}</p>
                                <img src={`${iconPath}${imageName}`} alt="Bla" />
		</div>
		)
	}

	render() {
		return (
			<div className="Popular">
			    <h2>Servicios Populares</h2>
			    <Carousel
			      autoPlay={3000}
			      stopAutoPlayOnHover
			      offset={50}
			      arrowLeft={<Icon className="icon-example" name="arrow-left" />}
			      arrowRight={<Icon className="icon-example" name="arrow-right" />}
			      addArrowClickHandler
			    >
				{this.props.services.map(service => {
					return this.serviceImage(service["name"], service["description"], service["imageName"])
				})}
			    </Carousel>
			</div>
		)
	}
}

export default Popular;
