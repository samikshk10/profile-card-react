import data from "../data";
function CompanyName(){
data.map((item,index)=>
{
    
    return( 
    <div key={index}>{item?.company_name || "ABC"}</div>
    );
});

}

export default CompanyName;