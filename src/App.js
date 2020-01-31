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

  getGitHubUser() {
    fetch('https://api.github.com/users/marcjoan')
      .then(response => {
        return response.json();
      })
      .then(user => {
        const profile = {
          name: user.name,
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
      })
      .catch(error => {
        console.log(error);
      });
  }

  getRepositoriesFromUser() {
    fetch(this.state.profile.repos_url)
      .then(response => {
        return response.json();
      })
      .then(repos => {
        const repositories = [];
        repos.forEach(rep => {
          if (rep.fork) return;
          const repo = {
            name: rep.name,
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
      })
      .catch(error => {
        console.log(error);
      });
  }

  getRepoLanguages(repo) {
    fetch(repo.languages_url)
      .then(response => {
        return response.json();
      })
      .then(langs => {
        const languages = this.state.languages;
        languages.total += Object.values(langs).reduce((acc, v) => acc + v);
        Object.entries(langs).forEach(([key, value]) => {
          languages[key] = value + languages[key] || value;
        });
        this.setState({ languages });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Navigator title={this.state.profile.name} />
        <main>
          <Card profile={this.state.profile} />
          <section className='projects'>
            {this.state.repositories.map((repository, i) => (
              <Projects key={i} project={repository} />
            ))}
          </section>
          <Languages
            languages={this.state.languages}
            total={this.state.languages.total}
          />
        </main>
      </>
    );
  }
}
