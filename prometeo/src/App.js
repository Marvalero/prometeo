import React, { Component } from "react";
import './App.css';
import Title from './Title/Title';
import Header from './Header/Header';
import Mainsearch from './Mainsearch/Mainsearch';
import Service from './Service/Service';

class App extends Component {
    state = {
      services: [
  { name: "Tuwalu", description: "build yout own branding" },
  { name: "Deliveroo", description: "deliver your food" },
  { name: "Google Analytics", description: "get your analytics" }
      ]
    }

    render() {
      return (
        <div className="App">
        	<Title />
        	<Header />
        	<Mainsearch />
        	{this.state["services"].map(service => {
            		return <Service name={service["name"]} description={service["description"]} />

        	})}
        </div>
      )
    }
}

export default App;
