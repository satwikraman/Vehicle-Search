import React from 'react'
import {connect} from 'react-redux'
class cars extends React.Component{
    render(){
        const car=this.props.carData
        console.log(car.photoUrl)
    return(
        <div className="cars container" style={{ padding : '50px'}}>
            <div className="card center" >
            <h4 style={{textAlign:'center'}}>{car.category} {car.year} {car.make} {car.model}</h4>
            <h6>{car.trim}</h6>
            <h6 style={{textAlign:'right'}}>Internet Price: {car.featuredPrice}</h6>
            <img
                src={car.photoUrl} width="800" height="500"
                className="img-rounded img-responsive"
                alt="User Avatar"/>
            </div>
        </div>
    )
}
}
const mapStateToProps=(state,ownProps)=>{
    let id=ownProps.match.params.p_id;
    console.log(id)
    return{
        carData:state.data.find(res=>res.model ===id)
    }
}
export default connect(mapStateToProps)(cars)