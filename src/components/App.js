import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    title: 'Full Stack React App.',
    contests: []
  };

  componentDidMount() {
    axios
      .get('api/contests')
      .then(resp => {
        this.setState({ contests: resp.data.contests });
      })
      .catch(err => 'Error: ' + err);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div>
          {this.state.contests.map(contest => (
            <ContestPreview {...contest} key={contest.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
