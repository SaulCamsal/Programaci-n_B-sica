import CardHeader from "./CardHeader"

function Card(){
    return(
        <>
            <div className="card" style={{"width": "18rem"}}>
                <CardHeader></CardHeader>
                <div className="card-body">
                    <h5 className="card-title">Gato feli</h5>
                    <p className="card-text"> Este es un gato que esta feli</p>
                    <a href="#" className="btn btn-primary">da cliiiick!!!</a>
                </div>
            </div>
        </>
    )
}

export default Card