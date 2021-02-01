import React, { Component } from "react";
import './App.css';
import Title from './Title/Title';
import Header from './Header/Header';
import Mainsearch from './Mainsearch/Mainsearch';
import Popular from './Popular/Popular';

class App extends Component {
    state = {
      services: [
	      { name: "MenuCel", description: "Crea un menú digital", popular: true, url: "https://www.youtube.com/watch?v=z-InP8oZdtk" },
	      { name: "Deliveroo", description: "Haz reparto a domicilio", popular: true, url: "https://www.youtube.com/watch?v=sSblP-U-sX4"},
	      { name: "OpenTable", description: "Permite reservar en tu restaurante", popular: true, url: "https://www.youtube.com/watch?v=WDUDXDXekbE" },
	      { name: "Tuwalu", description: "Personaliza tu uniforme", popular: true, url: "https://www.youtube.com/watch?v=Ltq08Z18tNI" },
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
