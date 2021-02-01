import React, { Component } from "react";
import './App.css';
import Title from './Title/Title';
import Header from './Header/Header';
import Mainsearch from './Mainsearch/Mainsearch';
import Popular from './Popular/Popular';
import Category from './Category/Category';
import Footer from './Footer/Footer';

class App extends Component {
    state = {
      services: [
	      { company: "MenuCel", slogan: "Crea un menú digital", popular: true, videourl: "https://www.youtube.com/watch?v=z-InP8oZdtk" },
	      { company: "Deliveroo", slogan: "Haz reparto a domicilio", popular: true, videourl: "https://www.youtube.com/watch?v=sSblP-U-sX4"},
	      { company: "OpenTable", slogan: "Permite reservar en tu restaurante", popular: true, videourl: "https://www.youtube.com/watch?v=WDUDXDXekbE" },
	      { company: "Gesio", slogan: "Permite a tus clientes pagar usando Bizum", popular: true, videourl: "https://www.youtube.com/watch?v=zxxQVp7Mpz8&t=70s" },
	      { company: "Gesio", slogan: "Gestiona los recursos en tu empresa", popular: true, videourl: "https://www.youtube.com/watch?v=eaEziQey1ZU&t=70s" },
	      { company: "Sofar", slogan: "Trae música en directo a tu negocio", popular: true, videourl: "https://www.youtube.com/watch?v=kxu1DrUJ0NY&t=20s" },
	      { company: "Trello", slogan: "Gestiona objetivos economicos, de marketing y operativos", popular: true, videourl: "https://www.youtube.com/watch?v=cuy4qOA5htQ&t=120s" },
	      { company: "Tuwalu", slogan: "Personaliza tu uniforme", popular: false, videourl: "https://www.youtube.com/watch?v=Ltq08Z18tNI" },
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
          <Category />
          <Footer />
        </div>
      )
    }
}

export default App;
