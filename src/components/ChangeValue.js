import React from 'react'

class ChangeValue extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            color: 'red',
            name : 'apple',
            region : 'north of Iran'
        }
    }

    change = ()=> {
        this.setState({color:'blue'});
    }


    render(){
        return(
            <>
                <h2>this is a component shows how to change value of props using setState method so we have 
                a fruit call {this.state.name} which is {this.state.color} and it is from {this.state.region}.
                When you press the button color would be changed!
                </h2>
                <button type='button' onClick={this.change}>change value</button>
            </>
        )
    }
}

export default ChangeValue;
