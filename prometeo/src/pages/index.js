import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Service from '../Service/Service';

class App extends Component {
    state = {
      services: [
	{ name: "Tuwalu", description: "build yout own branding" },
	{ name: "Deliveroo", description: "deliver your food" },
	{ name: "Google Analytics", description: "get your analytics" }
      ]
    }

    blogHandler = () => {
      console.log('Blog was clicked');
    }

    render() {
      return (
        <div className="App">
          <h1>Prometeo</h1>
          <p>Welcome to your new Prometeo e-commerce site.   Precio | Ofrecer mi producto | Hosteleros | Blog | Login |</p>
	  <button class="btn btn-light" onClick={this.blogHandler}>Blog</button>
	  {this.state["services"].map(service => {
            return <Service name={service["name"]} description={service["description"]} />

	  })}
        </div>
      )
    }
}

const IndexPage = () => (
  <main>
    <App />
  </main>
)

export default IndexPage
