import { useState } from "react"


function AddPost(props) {

    const [titulo,setTitulo] = useState("")
    const[description,setDescription] = useState("")

    function tituloChangeHandler(e){
        setTitulo(e.target.value)
    } 
    function descriptionChangeHandler(e){
        setDescription(e.target.value)
    }
    function buttonClickHandler(){
        props.onAgregarPostChange(titulo, description)
        setTitulo("")
        setDescription("")
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input onChange={tituloChangeHandler} type="text" className="form-control" id="exampleFormControlInput1" placeholder="title example"></input>
            </div>
            
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea onChange={descriptionChangeHandler} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={buttonClickHandler} className=""></button>
        </>
    )
}

export default AddPost