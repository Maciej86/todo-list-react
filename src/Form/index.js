import { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
	const [newTaskContent, setNewTaskContent] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		const trimNewTaskContent = newTaskContent.trim();
		if (trimNewTaskContent !== "") {
			addNewTask(trimNewTaskContent);
		}
		setNewTaskContent("");
	};

	return (
		<StyledForm onSubmit={onFormSubmit}>
			<StyledInput
				value={newTaskContent}
				onChange={({ target }) => setNewTaskContent(target.value)}
				type="text"
			/>
			<StyledButton>Dodaj zadanie</StyledButton>
		</StyledForm>
	);
};

export default Form;
