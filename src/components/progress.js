import { useEffect } from "react";
import { useState } from "react";

function Progress({completed,total,size_type}){
    const percent = (completed / total) * 100;
    const [progress, setprogress] = useState(0);

    useEffect(() => {
      setprogress(percent);
    },[percent]);

    
    return(             
        <div className="progress-bar">
        <div className="progress"  style={{ width:progress  + "%" }}></div>
        <div className="downloadcomplete__status">{completed} {size_type} of {total} {size_type}</div>
        </div>
        );
    
}

export default Progress;