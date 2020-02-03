import '../assets/css/profile.css';

import React, { Component } from 'react';
import { GoMarkGithub, GoOrganization } from 'react-icons/go';
import { MdEmail, MdLocationOn } from 'react-icons/md';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  render() {
    return (
      <section className='profile'>
        <img className='avatar' src={this.props.profile.avatar} alt='avatar' />
        <h1 className='name'>{this.props.profile.name}</h1>
        <h2 className='bio'>{this.props.profile.bio}</h2>
        <ul className='social'>
          {this.props.profile.email ? (
            <li
              className='item'
              data-value={this.props.profile.email}
              onClick={this.copyToClipboard}
            >
              <MdEmail />
            </li>
          ) : (
            <></>
          )}
          <li
            className='item'
            data-value={this.props.profile.url}
            onClick={this.copyToClipboard}
          >
            <GoMarkGithub />
          </li>
          {this.props.profile.company ? (
            <li
              className='item'
              data-value={this.props.profile.company}
              onClick={this.copyToClipboard}
            >
              <GoOrganization />
            </li>
          ) : (
            <></>
          )}
          {this.props.profile.location ? (
            <li
              className='item'
              data-value={this.props.profile.location}
              onClick={this.copyToClipboard}
            >
              <MdLocationOn />
            </li>
          ) : (
            <></>
          )}
        </ul>
      </section>
    );
  }

  copyToClipboard(e) {
    this.currentTarget = e.currentTarget;
    this.value = this.currentTarget.dataset.value;
    if (this.value == 'Copied!') return;
    this.currentTarget.dataset.value = 'Copied!';
    var input = document.createElement('input');
    input.value = this.value;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    setTimeout(() => {
      this.currentTarget.dataset.value = this.value;
    }, 350);
  }
}
