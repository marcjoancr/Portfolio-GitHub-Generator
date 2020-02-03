import React, { Component } from 'react';
import { GoPencil } from 'react-icons/go';
import '../assets/css/edit.css';

export default class Edit extends Component {
	constructor(props) {
		super(props);

		this.changeUser = this.changeUser.bind(this);
		this.getProperty = this.getProperty.bind(this);
		this.changeProperty = this.changeProperty.bind(this);
	}

	render() {
		return (
			<>
				<input type='checkbox' name='edit-toggle' id='edit-toggle' />
				<nav id='edit' className='sidebar edit'>
					<section className='navbar'>
						<ul className='menu'>
							<label htmlFor='edit-toggle' className='menu-icon'>
								<GoPencil />
							</label>
							<li className='item'>
								<input
									id='username'
									type='text'
									onChange={this.changeUser}
									placeholder='GitHub Username'
								/>
							</li>
							<li className='item'>
								<label htmlFor='primary_color'>Primary Color</label>
								<input
									id='primary_color'
									type='color'
									onChange={this.changeProperty}
									data-property='primary-color'
								/>
							</li>
							<li className='item'>
								<label htmlFor='text_color'>Text Color</label>
								<input
									id='text_color'
									type='color'
									onChange={this.changeProperty}
									data-property='text-color'
								/>
							</li>
							<li className='item'>
								<label htmlFor='text_contrasted'>Text Contrasted</label>
								<input
									id='text_contrasted'
									type='color'
									onChange={this.changeProperty}
									data-property='text-color-contrasted'
								/>
							</li>
							<li className='item'>
								<label htmlFor='bg_color'>Background Color</label>
								<input
									id='bg_color'
									type='color'
									onChange={this.changeProperty}
									data-property='bg-color'
								/>
							</li>
						</ul>
					</section>
				</nav>
			</>
		);
	}

	changeUser(e) {
		const username = e.currentTarget.value;
		this.props.changeUser(username);
	}

	getProperty(property) {
		return getComputedStyle(document.documentElement).getPropertyValue(
			`--${property}`
		);
	}

	changeProperty(e) {
		const target = e.currentTarget;
		const property = `--${target.dataset.property}`;
		document.documentElement.style.setProperty(property, target.value);
		this.props.colorsEdited();
	}
}
