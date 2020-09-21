import React from 'react';
import axios from 'axios';
import './style/global.scss'

import Routes from './routes';

class App extends React.Component {
    state = {
      usersData: [],
      reportsArray: []
  }

  componentDidMount() {
    axios.get('/users').then(response => this.setState({ usersData: response.data }));
    axios.get('/reports').then(response => this.setState({ reportsArray: response.data }));
  }

  render() {

    return (
      <Routes usersData={this.state.usersData} reportsArray={this.state.reportsArray} vacanciesNumber={2}/>
    );
  }
}

export default App;
