function ActiveStatus({status}){
   
    return(
<div className={ status ==="active" ? "profilecard__status status__isActive" : status==="in_active" ? "profilecard__status status__isInActive" : "profilecard__status status__isBlocked" }>
{ status==="active" ? "Active" : status==="in_active" ? "Inactive" : "Blocked" }
           </div>
    );
}
export default ActiveStatus;