import React, {Component} from "react";


export class Todo extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            count: 100,
            visibility: true
        }

    }

    incrementValue = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrementValue = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    showAndHide = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }

    render(){
        const displayStatus = this.state.visibility ? "Hide" : "Show";
        const todoCompo = this.state.visibility ? (<div>
            <button onClick={this.decrementValue}>decrement</button>
            <label style={{margin: '5vw'}}>{this.state.count}</label>
            <button onClick={this.incrementValue}>increment</button>
            </div>) : <div><label style={{margin: '5vw'}}>Hidden</label></div>;

        return(<div>
            {todoCompo}
            <button onClick={this.showAndHide}>{displayStatus}</button>
        </div>)
    }
}