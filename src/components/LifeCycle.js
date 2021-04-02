import React from 'react'

class LifeCycle extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            favoriteCol : 'red',
            name : 'Sky'
        }
    }

    changeColor = ()=>{
        this.setState({favoriteCol:'yellow'})
    }


    static getDerivedFromProps(props , state){//a method that is called befor render after constructor changing 
        //the value from props

        return({favoriteCol:props.favCol})

    }

    render(){
        return(
            <>
                <p>
                    getDerivedFromProps is a method for changing value befor render method so the color is <b>{this.state.favoriteCol}</b>
                </p>
                <button type='button' onClick={this.changeColor}>chnCol</button>
            </>
        )
    }
}


export default LifeCycle