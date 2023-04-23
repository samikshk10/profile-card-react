function FullName({full_name}){
    return (
        <div className="profilecard__name">{full_name || ''}</div>
    );
}

export default FullName;