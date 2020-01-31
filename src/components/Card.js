import React, { Component } from 'react';
import '../assets/css/profile.css';

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
          <i className='material-icons'></i>
        </ul>
      </section>
    );
  }
}
