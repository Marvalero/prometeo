import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import React, { Component } from 'react';

class Header extends Component {
	useStyles = makeStyles(() => ({
		header: {
			backgroundColor: "DarkOrange"
		},
	}));

	classes = {
		title: "PRometeooo",
		menuButton: "Blah"
	}
	render() {
		return(
			<AppBar position="static">
			  <Toolbar>
				  <Typography variant="h6">Prometeo</Typography>
				  <Button color="inherit">Login</Button>
			  </Toolbar>
			</AppBar>
		)
	}
}

export default Header;
