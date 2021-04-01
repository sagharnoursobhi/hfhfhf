import React from 'react'
class PropsLearn extends React.Component
{
    render(){
        return(
            <>
                <p>
                    using props in react shows color is {this.props.color}
                </p>
                <p>
                    learning props is important since it is the second form of showing a component {this.props.property}
                </p>
                <p>I have a state object to store the property values which are {this.state.color}, {this.state.brand} and {this.state.model}</p>
            </>
        )
    }

    constructor (props){
        super(props);
        this.state= {
            color:'red',
            brand:'BMW',
            model:'2019'
        };
    }
}

export default PropsLearn;