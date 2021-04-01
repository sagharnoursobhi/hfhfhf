import React from 'react';
class FirstTable extends React.Component{
    constructor(){
        super();//inheritence all properties of constructor parent functions...property in react put 
        this.state = {color:'red',
    name:'saghar' , family:'Nourobhi'};
    }
    render()
    {
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Family</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ali</td>
                            <td>Ahmari</td>
                            <td>male</td>
                        </tr>
                        <tr>
                            <td>Sara</td>
                            <td>Westran</td>
                            <td>female</td>
                        </tr>
                        <tr>
                            <td>Anna</td>
                            <td>Rose</td>
                            <td>female</td>
                        </tr>
                        <tr>
                            <td>Soroush</td>
                            <td>Noursobhi</td>
                            <td>male</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    This is a {this.state.color} car
                </p>
                <h1>
                    This is an employee named {this.state.name} {this.state.family}
                </h1>
            </>
        )
    }
    
}
export default FirstTable;

