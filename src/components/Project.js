import React, { Component } from 'react';
import '@material/react-material-icon/dist/material-icon.css';
import '../assets/css/project.css';

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const project = this.props.project;
    return (
      <section className='project'>
        <h2 className='title'>
          <a href={project.url}>{project.name}</a>
        </h2>
        <p className='description'>{project.description}</p>
        <div className='info'>
          <i>{project.stars}</i>
          <i>{project.forks}</i>
        </div>
      </section>
    );
  }
}
