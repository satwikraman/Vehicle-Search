import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Search from './components/Search'
import { Cars } from './components/Cars'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Search}
            />
            <Route path='/:p_id'
              render={
                (props) =>
                  <Cars {...props} carData={this.props.carData} />
              } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    carData: state
  }
}
export default connect(mapStateToProps)(App);
