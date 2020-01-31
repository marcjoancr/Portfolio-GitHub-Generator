import React, { Component } from 'react';
import Navigator from './components/Navigator';
import Card from './components/Card';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        profile: {
          name: 'Portfolio'
        }
      },
      loading: true
    };

    this.getGitHubUser = this.getGitHubUser.bind(this);
  }

  componentDidMount() {
    this.getGitHubUser();
  }

  getGitHubUser() {
    fetch('https://api.github.com/users/marcjoan')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const profile = {
          name: data.name,
          bio: data.bio,
          avatar: data.avatar_url
        };
        this.setState({ data: { profile }, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <>
        <Navigator title={this.state.data.profile.name} />
        <main>
          <Card profile={this.state.data.profile} />
        </main>
      </>
    );
  }
}
