import "./style.css";
import removeIcon from "./images/remove.png";
import doneIcon from "./images/done.png";

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
    <ul className="task">
        {tasks.map(task => (
            <li 
            className={`task__item ${hideDone && task.done ? "task__item--taskHide" : ""}`}
            key={task.id}>
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="task__button task__button--done"
                >
                    {task.done ? <img src={doneIcon} alt="Oznacz jako wykonane"/> : ""}
                </button>
                <span className={`task__content${task.done ? " task__content--done" : ""}`}> {task.content}</span>
                <button
                    onClick={() => removeTask(task.id)} 
                    className="task__button task__button--remove"
                >
                    <img src={removeIcon} alt="usuń z listy"/>
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;