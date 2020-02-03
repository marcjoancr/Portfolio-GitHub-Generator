import '../assets/css/project.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GoStar, GoRepoForked, GoX } from 'react-icons/go';

export default class Project extends Component {
	constructor(props) {
		super(props);

		this.delete = this.delete.bind(this);
	}

	render() {
		const project = this.props.project;
		return (
			<section className='project'>
				<span id='delete_project' className='delete' onClick={this.delete}>
					<GoX />
				</span>
				<h2 className='title'>
					<a href={project.url}>{project.name}</a>
				</h2>
				<p className='description'>{project.description}</p>
				<div className='info'>
					<p className='item'>
						<GoStar />
						{project.stars}
					</p>
					<p className='item'>
						<GoRepoForked />
						{project.forks}
					</p>
				</div>
			</section>
		);
	}

	delete() {
		this.props.delete(this.props.project.id);
	}
}
