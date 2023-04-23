import { Component } from "react";

class Avatar extends Component{


    render(){
        return <div className="profilecard__avatar">
                {this.props?.initial || "-"}
        </div>
    }
}

export default Avatar;