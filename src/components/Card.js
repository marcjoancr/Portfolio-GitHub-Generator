import React, { Component } from 'react';
import '../assets/css/profile.css';
import { GoMarkGithub, GoOrganization } from 'react-icons/go';
import { MdEmail, MdLocationOn } from 'react-icons/md';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='profile'>
        <img className='avatar' src={this.props.profile.avatar} alt='avatar' />
        <h1 className='name'>{this.props.profile.name}</h1>
        <h2 className='bio'>{this.props.profile.bio}</h2>
        <ul className='social'>
          <li className='item'>
            <MdEmail />
          </li>
          <li className='item'>
            <GoMarkGithub />
          </li>
          <li className='item'>
            <GoOrganization />
          </li>
          <li className='item'>
            <MdLocationOn />
          </li>
        </ul>
      </section>
    );
  }
}
