import React from 'react';
import {Helmet} from "react-helmet";

const Title = () => {
	return (
        <div className="application">
            <Helmet>
  				<html lang="es" amp />
				<meta name="description" content="The MArketplace For Innovation" />
                <meta charSet="utf-8" />
                <title>Prometeo</title>
                <link rel="canonical" href="https://marvalero.github.io/prometeo/" />
            </Helmet>
        </div>
	)
}

export default Title
