import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

import '../assets/css/languages.css';

export default class Languages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const languages = this.props.languages;
    delete languages.total;
    const data = {
      labels: Object.keys(languages),
      datasets: [
        {
          data: Object.values(languages),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#87CE46'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#87CE46']
        }
      ]
    };

    return (
      <section className='languages'>
        <Doughnut data={data} />
        {/* {Object.entries(this.props.languages).map(lang => {
          if (lang[0] == 'total') return;
          const language = lang[0];
          const value = Math.floor((lang[1] / this.props.total) * 10000) / 100;
          return (
            <React.Fragment key={language}>
              <section className='language'>
                <span className='name'>{language}</span>
                <div className='bar' data-percent={value}></div>
              </section>
            </React.Fragment>
          );
        })} */}
      </section>
    );
  }
}
