import React, { Component } from "react";
import './App.css';
import Title from './Title/Title';
import Header from './Header/Header';
import Mainsearch from './Mainsearch/Mainsearch';
import Service from './Service/Service';
import Popular from './Popular/Popular';

class App extends Component {
    state = {
      services: [
	      { name: "Tuwalu", description: "build yout own branding", popular: true },
	      { name: "Deliveroo", description: "deliver your food", popular: true },
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
        	{this.state["services"].map(service => {
            		return <Service name={service["name"]} description={service["description"]} />

        	})}
        </div>
      )
    }
}

export default App;
