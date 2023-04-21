import { Component } from "react";
import "./assets/css/profilecard.css";
import Avatar from "./components/avatar";
import Progress from "./components/progress";

class ProfileCard extends Component{

    constructor(){
        super();
        this.state={};
    }
    render(props){
           return(
             <div className="profilecard__container">

                <Avatar initial={this.props.name.slice(0,1)}/>
                    <div className="profilecard__content">
                        <div className="card-wrapper">
                        <div className="profilecard__name">{this.props.name}</div>

                    
                                <div  className={
            this.props.active
              ? "profilecard__status status__isActive"
              : "profilecard__status status__isInActive"
          }>
           </div>
                        </div>

                        
                            <div className="profilecard__desc">{this.props.desc}</div>
                            <Progress progress={this.props.progress} ></Progress>
                   
                     </div>
                 
            </div>

           );
    }
}

export default ProfileCard;