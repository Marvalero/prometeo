import React, { Component } from "react";
import './Service.css';

class Service extends Component {
    render() {
      return (
        <div className="Service">
            <h1>{this.props.name}</h1>
            <p>{this.props.description}</p>
        </div>
      )
    }
}

export default Service
