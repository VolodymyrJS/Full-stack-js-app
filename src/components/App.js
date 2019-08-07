import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    title: 'Full Stack React App.'
  };
  render() {
    return (
      <div>
        <Header title={this.state.title} />
      </div>
    );
  }
}

export default App;
