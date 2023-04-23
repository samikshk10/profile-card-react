import { useState } from "react";

function Button({button}){
    const[label,setlabel]=useState(button);


    return (
    <button onClick={()=>{label==="invited"? setlabel("not_invited") : setlabel("invited")}}  className={label==="invited" ? "btn btn__not-invited" : "btn btn__invited"}>{label==="invited" ?"Remove" : "Invite"}</button>
    );
}
export default Button;