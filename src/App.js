import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Search from './components/Search'
import {Cars} from './components/Cars'

class  App extends React.Component {
constructor(props){
  super(props);
  this.state={
    id:''
  }
}
  searchModel=(model)=>{
    let id=model
    console.log(this.props)
    console.log(this.setState({id:id}))
    console.log(this.state)
  }
  render(){
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' render={(props)=> <Search  {...props}  searchModel={this.searchModel} />} />
        <Route path='/:p_id' render={(props)=> <Cars {...props} carData={()=>{this.props.carData(this.state.id)}}/>}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
  }
}
const mapStateToProps=(state,ownProps)=>{

  return{ 
    carData:(id)=>state.data.find(res=>res.model ===id)
  }
}
export default connect(mapStateToProps)(App);
