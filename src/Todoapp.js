import React, { Component } from 'react';
//import { render } from 'react-dom';
import {Checkbox, TextArea} from 'semantic-ui-react';
import "./Todoapp.css";

var arr={};
var i=0;
var count=0;
class Todoapp extends React.Component{
    

    constructor(){
        super();
        this.state={
            checkbox:false,
            inputValue:" "
        }
    }
    handleCheckbox(e){
        this.setState({checkbox: e.target.checked})
    }
    handleInput(e){
        this.setState({inputValue: e.target.value})
    }
    Do(e) {
        for(i in count){
            count++;
        this.setState({inputValue: e.target.value=arr[i]})
        Text.clear();
        
        }
    }


render() {
    return(
        <div className="head">
            <div className='headin'>
                <h1>Make Your List</h1><div id="checkin">
                    <input type="checkbox" onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox} />&nbsp;
                    <input type="textarea" id="textr" value={this.state.inputValue} disabled={this.state.checkbox} onChange={this.handleInput.bind(this)} />
                </div>
                <button onClick={this.Do()}>Next</button>
            </div>
        </div>
    );

    }
}
class Test extends React.Component{
    render(){
        return(
            <div><Todoapp /></div>
        )
    }
}

export default Test;