import { ITask } from "../ToDoList/ToDoList"
import confetti from "canvas-confetti"

interface IItem{
    item: ITask
    onCheckBoxClick: (item: ITask) => void
    onDeleteItem: (item: ITask) => void;
}
const openConfetti = () =>{
    confetti ({
        spreed: 400,
        particlesCount: 100
    })
}


export function Item({ item, onCheckBoxClick, onDeleteItem}: IItem){
    const handleChange = () => {
        if(!item.checked){
            openConfetti()
        }
        onCheckBoxClick({...item, checked: !item.checked })
    }
    const handleClickDelete = () => {
        onDeleteItem(item);
    }
    return(
        <div className="container-item">
            <input type="checkbox" checked={item.checked} onChange={handleChange}/>
            <span className={item.checked ? "line-through" : ""}>{item.text}</span>
            <button onClick={handleClickDelete}>x</button>
        </div>
    )
}