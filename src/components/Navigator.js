import React, { Component } from 'react';
import '../assets/css/sidebar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Navigator extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<input type='checkbox' name='toggle' id='sidebar-toggle'></input>
				<nav className='sidebar'>
					<section className='navbar'>
						<figure className='logo'>{this.props.title}</figure>
						<label id='nav-icon' htmlFor='sidebar-toggle' className='menu-icon'>
							<i className='hamburger'></i>
						</label>
						<label htmlFor='sidebar-toggle' className='menu-bg'></label>
						<ul className='menu'>
							<li className='item'>
								<a href='#'>Resume</a>
							</li>
							<li className='item'>
								<a href='#languages'>Repo Languages</a>
							</li>
							<li className='item'>
								<a href='#projects'>Projects</a>
							</li>
							<li className='item'>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
					</section>
				</nav>
			</>
		);
	}
}
