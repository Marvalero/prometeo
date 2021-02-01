import React, { Component } from 'react';
import './Category.css'
import { faCircleNotch, faHandHoldingUsd, faTruck, faChartLine, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Category extends Component {
    state = {
      categorylist: [
	      { name: "Experiencia 360", icon: faCircleNotch },
	      { name: "Finanzas", icon: faHandHoldingUsd },
	      { name: "Logistica", icon: faTruck },
	      { name: "Inteligencia Artificial", icon: faChartLine },
	      { name: "Automatizacion", icon: faRobot },
      ]
    }

	categoryImage = (name, icon) => {
		return (
			<div style={{padding: "30px"}}>
			    <div style={{fontSize: "70px"}}>
					<FontAwesomeIcon icon={icon}/>
				</div>
				<p>{name}</p>
			</div>
		)
	}

	render() {
		return(
			<div className="Category">
			    <h2 className="Main-h2">Categorias</h2>
				<h2 className="Basic-h2">Explora nuestras categorias</h2>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}} >
					{this.state.categorylist.map(category => {
						return this.categoryImage(category["name"], category["icon"])
					})}
				</div>
			</div>
			)
	}
}

export default Category