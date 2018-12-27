import React, { Component } from 'react';
import {hashHistory} from 'react-router'
import HomeCard from '../ui/HomeCard'

class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => hashHistory.push('/releases')
    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => hashHistory.push('/backlog')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => hashHistory.push('/sprints')
    }

  render() {
    return (
      <div class="container text-center">
        <div class="row">
            <HomeCard title={this.homeCardReleases.title}
                    text={this.homeCardReleases.text}
                    action={this.homeCardReleases.action}/>
            <HomeCard {...this.homeCardBacklog}/>
            <HomeCard {...this.homeCardSprints}/>
        </div>
      </div>
    );
  }
}

export default Home;