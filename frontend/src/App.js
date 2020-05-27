import React from 'react';
import axios from 'axios';
import './global.css'

import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: []
    }
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
