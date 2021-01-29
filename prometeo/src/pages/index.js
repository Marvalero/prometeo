import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';

function Service(props) {
    return (
        <div className="service">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

let app = (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Prometeo e-commerce site.</p>
    <Service name="Tuwalu" description="build your own branding" />
    <Service name="Deliveroo" description="deliver your food" />
    <Service name="Google Analytics" description="get your analytics" />
  </div>
)

const IndexPage = () => (
  <main>
    {app}
  </main>
)

export default IndexPage
