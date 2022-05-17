// import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
	<div className="taskButtons">
		{tasks.length > 0 && (
			<>
				<button onClick={toggleHideDone} className="taskButtons__button">
					{hideDone ? "Pokaż" : "Ukryj"} ukończone
				</button>
				<button
					onClick={setAllDone}
					className="taskButtons__button"
					disabled={tasks.every(({ done }) => done)}
				>
					Ukończ wszystkie
				</button>
			</>
		)}
	</div>
);

export default Buttons;
