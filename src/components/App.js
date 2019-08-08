import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  state = {
    title: 'Full Stack React App.',
    contests: this.props.initialContests
  };

  componentDidMount() {}

  componentWillUnmount() {}

  fetchContest = contestId => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <ContestList
          contests={this.state.contests}
          onContestClick={this.fetchContest}
        />
      </div>
    );
  }
}

export default App;
