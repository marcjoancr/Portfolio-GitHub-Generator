import '../assets/css/project.css';
import React, { Component } from 'react';
import { GoStar, GoRepoForked } from 'react-icons/go';

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
}
