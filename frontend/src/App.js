import React from 'react';
import './style/global.scss';

import Routes from './routes';

const App = props => {
  return (
    <Routes vacanciesNumber={props.vacanciesNumber}/>
  );
}

export default App;
