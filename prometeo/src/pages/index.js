import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Service from './Service'

let app = (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Prometeo e-commerce site.   Precio | Ofrecer mi producto | Hosteleros | Blog | Login |</p>
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
