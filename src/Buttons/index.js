// import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    <div className="taskButtons">
        {tasks.length > 0 && (
            <>
                <button className="taskButtons__button"> 
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="taskButtons__button" disabled={tasks.every(({ done }) => done )}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;