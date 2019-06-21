import React from 'react'

export  const Cars =(props)=>{
console.log(props.carData)
        const car={props}
        return  (car.length) ? (
            
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
            
        ):(
            <p className='center'>no data found</p>
        );
   

}

