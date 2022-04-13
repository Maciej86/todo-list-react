import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = event => {
        event.preventDefault();
        const trimNewTaskContent = newTaskContent.trim();
        if(trimNewTaskContent !== "") {
            addNewTask(trimNewTaskContent);
        }
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text" 
                className="form__input"
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
}

export default Form;