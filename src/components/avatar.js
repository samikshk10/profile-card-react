import { Component } from "react";

class Avatar extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return <div className="profilecard__avatar">
                {this.props.initial}
        </div>
    }
}

export default Avatar;