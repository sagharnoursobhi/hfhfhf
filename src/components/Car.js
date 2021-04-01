import React from 'react'
import CarBrand from './CarBrand'

class CarName extends React.Component{
    render(){
        return(
            <>
                <p>
                    This is a car named {this.props.CarName}
                </p>
                <CarBrand CarBrand="Saipa"/>
            </>
        )
    }
}

export default CarName