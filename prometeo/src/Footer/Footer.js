import React, { Component } from 'react'
import "./Footer.css"

class Footer extends Component {
    state = {
      categorylist: ["Finanzas", "Inteligencia Artificial"],
      about: ["Sobre Nosotros", "Trabaja para nosotros"],
      support: ["Preguntas frecuentes", "Contacta con Nosotros"],
    }

	generateColumn = (name, links) => {
		return (
			<div style={{padding: "30px"}}>
				<p style={{fontWeight: "bold"}}>{name}</p>
				{links.map(link => {
					return (<p>{link}</p>)
				})}
			</div>
		)
	}

	render() {
		return (
			<div className="Footer">
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
					{this.generateColumn("Categorias", this.state.categorylist)}
					{this.generateColumn("Sobre", this.state.about)}
					{this.generateColumn("Contacto", this.state.support)}
				</div>
			</div>
		)
	}
}

export default Footer;