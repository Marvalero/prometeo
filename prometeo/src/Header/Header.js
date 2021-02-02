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
  icon: {
    maxWidth: 30,
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
   importantMenuButton: {
      color: "RoyalBlue",
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
   },
  header: {
    backgroundColor: "Orange",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

class Header extends Component {	
	iconPath = process.env.PUBLIC_URL + '/';
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
	    important: true
	  },
	];

	getMenuButtons = (classimportant, classbutton) => {
	    return this.headersData.map(({ label, href, important }) => {
	      return (
		<Button
		  {...{
		    key: label,
		    color: "inherit",
		    to: href,
		    component: RouterLink,
		  }}
			className={ important ? classimportant : classbutton}
		>
		  {label}
		</Button>
	      );
	    });
	  };

	render() {
		const { classes } = this.props;
		return(
		    <div className={classes.header}>
			<AppBar
				position="fixed"
				className={classes.root}>
			  <Toolbar className={classes.toolbar}>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="h1" className={classes.logo}>
				  <img src={this.iconPath + "logo-white192.png"} alt="icon" className={classes.icon} />
				  Prometeo
				</Typography>
				<div className={classes.menuButton}>{this.getMenuButtons(classes.importantMenuButton, classes.menuButton)}</div>
			  </Toolbar>
			</AppBar>
		    </div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(Header);
