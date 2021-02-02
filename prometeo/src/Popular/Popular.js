import React, { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
import '@brainhubeu/react-carousel/lib/style.css';
import './Popular.css'
import ReactPlayer from "react-player";
import { Link as RouterLink } from "react-router-dom";

class Popular extends Component {
	serviceImage = (company, slogan, videourl) => {
		return (
			<div className="Basic">
				<h2 className="Basic-h2">{slogan}</h2>
				<p className="Basic-p">
				  <RouterLink to={"/company/" + company}>{company}</RouterLink>
				</p>
				<ReactPlayer
					className='react-player'
					url={videourl}
					muted={false}
					playing={false}
					width="100%"
					height="100%"
				/>
		</div>
		)
	}

	render() {
		return (
			<div className="Popular">
			    <h2 className="Main-h2">Servicios Populares</h2>
			    <Carousel
			      autoPlay={5000}
			      stopAutoPlayOnHover
			      offset={50}
			      arrowLeft={<Icon className="icon-example" name="arrow-left" />}
			      arrowRight={<Icon className="icon-example" name="arrow-right" />}
			      addArrowClickHandler
			    >
				{this.props.services.map(service => {
					return this.serviceImage(service["company"], service["slogan"], service["videourl"])
				})}
			    </Carousel>
			</div>
		)
	}
}

export default Popular;
