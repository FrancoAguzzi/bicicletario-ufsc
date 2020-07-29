import React from 'react';
import axios from 'axios';
import './style/global.scss'

import Routes from './routes';

class App extends React.Component {
    state = {
      usersData: []
  }

  componentDidMount() {
    axios.get('/users').then(response => this.setState({ usersData: response.data }));
  }

  render() {

    return (
      <Routes usersData={this.state.usersData} />
    );
  }
}

export default App;
