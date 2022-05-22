import { StyledButton, StyledWraperButton } from "../Buttons/styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
	<StyledWraperButton>
		{tasks.length > 0 && (
			<>
				<StyledButton onClick={toggleHideDone}>
					{hideDone ? "Pokaż" : "Ukryj"} ukończone
				</StyledButton>
				<StyledButton
					onClick={setAllDone}
					disabled={tasks.every(({ done }) => done)}
				>
					Ukończ wszystkie
				</StyledButton>
			</>
		)}
	</StyledWraperButton>
);

export default Buttons;
