function H_Object(props) {
    return (
        <div className="flex">
            <img src="https://img.icons8.com/?size=512&id=34&format=png" style={{width:20, height:20}}></img>
            {/* TODO 1.9 FILL IN THE HOTEL INFORMATION */}
            <h3>{props.name} - {props.rating}/100</h3>
        </div>
    )
    
}

export default H_Object;