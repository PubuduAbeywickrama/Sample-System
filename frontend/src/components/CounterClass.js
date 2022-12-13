import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.state = {
            num : 0
        }
    }

    increment (){
        this.setState({
            num : this.state.num + 1
        })
    }

    render(){
        return(
            <div>
                <h1>counter = {this.state.num}</h1>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}

export default CounterClass;