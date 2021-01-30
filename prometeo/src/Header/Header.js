import { AppBar, Toolbar, Typography, Button, withStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    backgroundColor: "DarkOrange"
  }
});

class Header extends Component {
	classes = {
		title: "PRometeooo",
		menuButton: "Blah"
	}
	render() {
		const { classes } = this.props;
		return(
			<AppBar position="static" className={classes.root}>
			  <Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Prometeo</Typography>
				<Button color="inherit">Login</Button>
			  </Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(styles, { withTheme: true })(Header);
