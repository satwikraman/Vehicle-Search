import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Search from './components/Search'
import {Cars} from './components/Cars'

class  App extends React.Component {
  searchModel=(model)=>{
    console.log(this.props)
    // this.props.history.push(`/${model}`)
  }
  render(){
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' render={(props)=> <Search  {...props}  searchModel={this.searchModel} />} />
        <Route path='/:p_id' render={(props)=> <Cars {...props} carData={this.props.carData}/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}
const mapStateToProps=(state,ownProps)=>{
  let id;
  if(ownProps){
    id=ownProps
    //console.log(id)
  }
  return{
      carData:state.data.find(res=>res.model ===id)

  }
}
const mergeProps=(stateProps,dispachProps,ownProps)=>{
  console.log(dispachProps)
  return {
    ...stateProps,...dispachProps
};
}
export default connect(mapStateToProps,{},mergeProps)(App);
