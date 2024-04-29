import { useState } from "react";
import { InputForm } from "../Imput/ImputForm"
import { Container } from "../Container/Container";
import { Item } from "../Item/Item";

export interface ITask{
    id: string
    text: string
    checked: boolean
    onClick: boolean
}

function ToDoList(){
    //Las variables en React son los hooks, los useStates
    const [items, setItems] = useState<ITask[]>([])

    const handleAddValue = (text:string) => {
        const task: ITask = {
            id: crypto.randomUUID(),
            text:text,
            checked: false,
            onClick: false
        }
        setItems([...items, task])
    }
    
    const handleCheckBoxClick = (item:ITask) =>{
        const newItems = items.filter((_item: ITask) => _item.id !== item.id)
        newItems.push(item)
        setItems(newItems)
    }
    const handleDeleteClick = (item:ITask): void =>{
        const newItem = items.filter((_item: ITask) => _item.id !== item.id)
        setItems(newItem)
    }

    return (
        <div className="todo-list">
            <InputForm onAddValue={handleAddValue}></InputForm>
            
            <section className="main-container">
                <Container title="Tareas Pendiente">
                    {items.filter((item) => !item.checked ).map((item, index) => {
                        return <Item key={index}
                            item = {item} onCheckBoxClick={handleCheckBoxClick} onDeleteItem={handleDeleteClick}
                        ></Item>
                    })}
                    
                </Container>
                <Container title="Tareas Realizadas">
                {items.filter((item) => item.checked ).map((item, index) => {
                        return <Item key={index}
                         item = {item} onCheckBoxClick={handleCheckBoxClick} onDeleteItem={handleDeleteClick}></Item>
                    })}
                    
                </Container>
            </section>

        </div>
    )
}

export default ToDoList
