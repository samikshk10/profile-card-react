import { Component } from "react";

class Progress extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(             
        <div className="progress-bar">

        <div className="progress"  style={{ width: this.props.progress + "%" }}></div>
        </div>
        );

    }
}

export default Progress;