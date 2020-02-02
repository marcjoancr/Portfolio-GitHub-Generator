import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import '../assets/css/languages.css';

export default class Languages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const languages = this.props.languages;
    delete languages.total;
    const dataValues = Object.values(languages).forEach(
      value => value / this.props.total
    );
    const primaryColor = getComputedStyle(document.body).getPropertyValue(
      '--primary-color'
    );

    const data = {
      labels: Object.keys(languages),
      datasets: [
        {
          data: Object.values(languages),
          backgroundColor: primaryColor,
          hoverBackgroundColor: primaryColor
        }
      ]
    };
    const options = {
      scales: {
        yAxes: [
          {
            position: 'right'
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: false
      }
    };

    return (
      <section id='languages' className='languages'>
        <HorizontalBar data={data} options={options} height={100} />
      </section>
    );
  }
}
