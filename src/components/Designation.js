function Designation({designation}){
    return (
        <div className="profilecard__desc">{designation || 'intern'}</div>

    );
}

export default Designation;