import "./assets/css/profilecard.css";
import Avatar from "./components/avatar";
import Progress from "./components/progress";
import ActiveStatus from "./components/ActiveStatus";
import FullName from "./components/FullName";
import Designation from "./components/Designation";

function ProfileCard(props){ 

           return(
             <div className="profilecard__container">
                <Avatar initial={props?.full_name.slice(0,1) || "-" }/>
                    <div className="profilecard__content">
                        <div className="card-wrapper">
                       <FullName full_name={props?.full_name || "----"}/>
                              <ActiveStatus status={props?.active_status || "in_active"}/>
                        </div>
                        <Designation designation={props?.designation}/>
                            <Progress progress={props?.age || 18} ></Progress>
                     </div>
            </div>

           );
    
}

export default ProfileCard;