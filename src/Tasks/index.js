import "./style.css";
import removeIcon from "./images/remove.png";
import doneIcon from "./images/done.png";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="task">
        {tasks.map(task => (
            <li 
            className={`task__item ${hideDoneTasks && task.done ? "task__item--taskHide" : ""}`}
            key={task.id}>
                <button className="task__button task__button--done">
                    {task.done ? <img src={doneIcon} alt="Oznacz jako wykonane"/> : ""}
                </button>
                <span className={`task__content${task.done ? " task__content--done" : ""}`}> {task.content}</span>
                <button className="task__button task__button--remove">
                    <img src={removeIcon} alt="usuń z listy"/>
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;