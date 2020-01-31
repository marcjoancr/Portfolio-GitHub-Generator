import React, { Component } from 'react';

export default class Languages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {Object.entries(this.props.languages).map(lang => {
          if (lang[0] == 'total') return;
          const language = lang[0];
          const value = Math.floor((lang[1] / this.props.total) * 10000) / 100;
          return (
            <React.Fragment key={language}>
              <h2>{language}</h2>
              <h3>{value}</h3>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
