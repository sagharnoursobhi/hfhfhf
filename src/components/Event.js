import React from 'react' 
class Event extends React.Component{

     shoot (a) {

        alert('our ' + a +' is in react we do not use function keyword !')
    }
    
    render(){
        return(
            <>
                <button className="btn" onClick={()=>{this.shoot("goal")}}>This is a fact</button>
            </>
        )
    }
}

export default Event;