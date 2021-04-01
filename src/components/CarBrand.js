import React from 'react'

class CarBrand extends React.Component{
    render(){
        return(
            <>
                <p>
                    and its brand is {this.props.CarBrand}
                </p>
            
            </>
        )
    }
}

export default CarBrand;