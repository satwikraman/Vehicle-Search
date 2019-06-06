import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import search from './components/search'
import cars from './components/cars'

class  App extends React.Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' component={search} />
        <Route path='/:p_id' component={cars}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
