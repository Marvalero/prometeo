import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	withStyles,
	IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import './Header.css'
import { Link as RouterLink } from "react-router-dom";

const styles = theme => ({
  root: {
    backgroundColor: "DarkOrange"
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
   menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
   },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

class Header extends Component {	
	headersData = [
	  {
	    label: "Blog",
	    href: "/blog",
	  },
	  {
	    label: "Añadir my aplicación",
	    href: "/oferentes",
	  },
	  {
	    label: "Hosteleria",
	    href: "/hosteleros",
	  },
	  {
	    label: "Entrar",
	    href: "/login",
	  },
	];

	getMenuButtons = () => {
	    return this.headersData.map(({ label, href }) => {
	      return (
		<Button
		  {...{
		    key: label,
		    color: "inherit",
		    to: href,
		    component: RouterLink,
		    className: this.props["className"]
		  }}
		>
		  {label}
		</Button>
	      );
	    });
	  };
	  
	render() {
		const { classes } = this.props;
		return(
			<AppBar position="static" className={classes.root}>
			  <Toolbar className={classes.toolbar}>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="h1" className={classes.logo}>Prometeo</Typography>
				  <div className={classes.menuButton}>{this.getMenuButtons()}</div>
			  </Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(styles, { withTheme: true })(Header);
