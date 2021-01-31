import React from 'react';
import {Helmet} from "react-helmet";

const Title = () => {
	return (
        <div className="application">
            <Helmet>
  		<html lang="es" amp />
		<meta name="description" content="El Marketplace de la Innovacion" />
                <meta charSet="utf-8" />
                <title>Prometeo</title>
                <link rel="canonical" href="https://marvalero.github.io/prometeo/" />
		<meta property="og:title" content="Prometeo"/>
                <meta property="og:image" content=""/>
            </Helmet>
        </div>
	)
}

export default Title
