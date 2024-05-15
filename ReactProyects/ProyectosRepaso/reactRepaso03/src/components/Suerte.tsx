
function Suerte(){

    let suerte = Math.random() > .5 ? "Suerte" : "Mala Suerte"


    return(
        <>
            <p>{suerte}</p>
        </>
    )

}

export default Suerte