// import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDone}) => (
    <div className="taskButtons">
        {tasks.length > 0 && (
            <>
                <button className="taskButtons__button"> 
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="taskButtons__button" disabled={tasks.every(({ done }) => done )}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;