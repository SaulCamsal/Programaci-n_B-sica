
function Post(props){
    return(
        <>
            <div className="card" style={{"width": "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                </div>
            </div>
        </>
    )
}

export default Post