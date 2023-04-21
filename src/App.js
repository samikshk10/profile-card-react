import {Component} from "react";
import ProfileCard from "./ProfileCard";
class App extends Component{

  constructor()
  {
    super();
    this.state={
      name: "Samik Shakya",
      progress: 35,
      desc: "Developer/Student",
      active: true
    };
  }
  
  render(){
       return ( 
       <div>
          <ProfileCard name={this.state.name} desc={this.state.desc} progress={this.state.progress} active={this.state.active}></ProfileCard>
        </div>
       );
  }
}


export default App;