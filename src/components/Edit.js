import React, { Component } from 'react';
import '../assets/css/edit.css';
import { logDOM } from '@testing-library/react';

export default class Edit extends Component {
	constructor(props) {
		super(props);

		this.getProperty = this.getProperty.bind(this);
		this.changeProperty = this.changeProperty.bind(this);
	}

	render() {
		return (
			<section id='edit' className='edit'>
				<div>
					<label htmlFor='primary_color'>Primary Color</label>
					<input
						id='primary_color'
						type='color'
						onChange={this.changeProperty}
						data-property='primary-color'
					/>
				</div>
				<div>
					<label htmlFor='text_color'>Text Color</label>
					<input
						id='text_color'
						type='color'
						onChange={this.changeProperty}
						data-property='text-color'
					/>
				</div>
				<div>
					<label htmlFor='text_contrasted'>Text Contrasted</label>
					<input
						id='text_contrasted'
						type='color'
						onChange={this.changeProperty}
						data-property='text-color-contrasted'
					/>
				</div>
				<div>
					<label htmlFor='bg_color'>Background Color</label>
					<input
						id='bg_color'
						type='color'
						onChange={this.changeProperty}
						data-property='bg-color'
					/>
				</div>
			</section>
		);
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
		this.props.callback();
	}
}
