import React, { Component } from "react";
import './App.css';
import Title from './Title/Title';
import Header from './Header/Header';
import Mainsearch from './Mainsearch/Mainsearch';
import Popular from './Popular/Popular';

class App extends Component {
    state = {
      services: [
	      { name: "Tuwalu", description: "Personaliza tu uniforme", popular: true, imageName: "tuwalu-vertical.jpg" },
	      { name: "Deliveroo", description: "Haz reparto a domicilio", popular: true, imageName: "deliveroo-vertical.png"},
	      { name: "OpenTable", description: "Permite reservar en tu restaurante", popular: true, imageName: "opentable-vertical.png" },
              { name: "Google Analytics", description: "get your analytics" }
      ]
    }

   checkPopular(service) {
     return service["popular"];
   }

    render() {
      return (
        <div className="App">
        	<Title />
        	<Header />
        	<Mainsearch />
        	<Popular services={this.state["services"].filter(this.checkPopular)}/>
        </div>
      )
    }
}

export default App;
