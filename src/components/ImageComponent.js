import React from "react";
import '../App.css';

export const ImageComponent = function (props){
    return(
        <div className="App-logo">
        <a href={props.link} target="_blank">
        <img className="App-image" src={props.sourcelink} />
        </a> 
        </div>       
    );
  }
  