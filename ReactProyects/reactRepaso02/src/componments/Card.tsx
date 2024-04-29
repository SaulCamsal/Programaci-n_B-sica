import { CardHeader } from "./card/CardHeader"


export function Card(){
    return(
        <>
        <div className="card" style={{width : "18rem"}}>
            <CardHeader></CardHeader>
            <div className="card-body">
                    <h5 className="card-title"> Gato Feli' </h5>
                    <p className="card-text">Este es una imagen de un gato que esta feliz</p>
                    <a href="#" className="btn btn-primary"> Go somewhere</a>
            </div>
        </div>
        </>
    )
}