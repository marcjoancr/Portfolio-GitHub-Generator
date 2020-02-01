import React, { Component } from 'react';

import RandomProfile from 'random-profile-generator';

import Navigator from './components/Navigator';
import Card from './components/Card';
import Projects from './components/Project';
import Languages from './components/Languages';

export default class App extends Component {
  constructor() {
    super();

    const randomProfile = RandomProfile.profile();

    this.state = {
      profile: {
        name: randomProfile.fullName,
        bio: 'Web Developer',
        avatar: randomProfile.avatar
      },
      repositories: [],
      languages: { total: null }
    };

    this.getGitHubUser = this.getGitHubUser.bind(this);
    this.getRepositoriesFromUser = this.getRepositoriesFromUser.bind(this);
    this.getRepoLanguages = this.getRepoLanguages.bind(this);
  }

  componentDidMount() {
    this.getGitHubUser();
  }

  doFetch(url, callback) {
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getGitHubUser() {
    this.doFetch('https://api.github.com/users/marcjoan', user => {
      const profile = {
        name: user.name || user.login,
        bio: user.bio,
        avatar: user.avatar_url,
        email: user.email,
        url: user.url,
        company: user.company,
        location: user.location,
        repos_url: user.repos_url
      };
      this.setState({ profile });
      this.getRepositoriesFromUser();
    });
  }

  getRepositoriesFromUser() {
    this.doFetch(this.state.profile.repos_url, repos => {
      const repositories = [];
      repos.forEach(rep => {
        if (rep.fork) return;
        const repo = {
          name: rep.name.replace(/-/g, ' '),
          description: rep.description,
          url: rep.html_url,
          languages_url: rep.languages_url,
          stars: rep.stargazers_count,
          forks: rep.forks_count
        };
        repositories.push(repo);
        this.getRepoLanguages(repo);
      });
      this.setState({ repositories });
    });
  }

  getRepoLanguages(repo) {
    this.doFetch(repo.languages_url, langs => {
      const languages = this.state.languages;
      languages.total += Object.values(langs).reduce((acc, v) => acc + v);
      Object.entries(langs).forEach(([key, value]) => {
        languages[key] = value + languages[key] || value;
      });
      this.setState({ languages });
    });
  }

  render() {
    return (
      <>
        <Navigator title={'Portfolio'} />
        <main>
          <Card profile={this.state.profile} />
          <Languages
            languages={this.state.languages}
            total={this.state.languages.total}
          />
          <section className='projects'>
            {this.state.repositories.map((repository, i) => (
              <Projects key={i} project={repository} />
            ))}
          </section>
        </main>
      </>
    );
  }
}
