
export function InputForm({onAddValue}: any){

    const handleForm = (event:any) =>{
        event.preventDefault();
        const form = new FormData(event.target);
        const text: string = form.get("item") as string;
        onAddValue(text)
        event.target.reset()
    }

    return(
        <form className="input-form" onSubmit={handleForm}>
            <input name="item" type="text" placeholder="Agregar Tarea"></input>
            <button>Agregar</button>
        </form>
    );
}