import ActiveStatus from "./components/ActiveStatus";
import Designation from "./components/Designation";
import FullName from "./components/FullName";
import Avatar from "./components/avatar";
import Progress from "./components/progress";
import data from "./data";
import "./assets/css/profilecard.css";
import Button from "./components/Button";

function Table(){
return (
        <div className="table__container">
            <table>
                <thead>
                <tr className="table__heading">
                    <th></th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Action</th>

                </tr>
                </thead>

                <tbody>

                 {data.map((items,i)=>{
    return(
    items.users.map((item,index)=>{
      return(
      <tr  >
        <td><input type="checkbox"></input></td>          
      <td className="table__name"><Avatar key={index} initial={item?.full_name.slice(0,1) || "-"}/><FullName full_name={item?.full_name || "ABC"}/></td>
      <td ><Designation key={index} designation={item?.designation || "intern"}/></td>
      <td><ActiveStatus key={index} status={item?.active_status || "in_active"}/></td>
      
      <td><Progress key={index} completed={item?.download_completed_rate.completed || 0} total={item?.download_completed_rate.total || 0} size_type={item?.download_completed_rate.size_type || "KB"}/></td>
      <td><Button button={item?.invited_status || "not_invited"} /></td>
  </tr>
      )
    })
    )
  })}  
                </tbody>
            </table>
        </div>
);
}

export default Table;