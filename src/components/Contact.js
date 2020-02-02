import React, { Component } from 'react';
import '../assets/css/contact.css';

export default class Contact extends Component {
  render() {
    return (
      <section id='contact' className='contact'>
        <form action='#' method='post'>
          <input
            type='email'
            className='email'
            placeholder='email@sample.com'
            required
          />
          <input
            type='text'
            className='subject'
            placeholder='Your Subject'
            required
          />
          <textarea
            className='content'
            placeholder='Here your content...'
            required
          ></textarea>
          <input type='submit' className='submit' value='Submit' />
        </form>
      </section>
    );
  }
}
