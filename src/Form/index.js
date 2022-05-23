import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
	const [newTaskContent, setNewTaskContent] = useState("");
	const inputFocus = useRef(null);

	const onFormSubmit = (event) => {
		event.preventDefault();
		const trimNewTaskContent = newTaskContent.trim();
		if (trimNewTaskContent !== "") {
			addNewTask(trimNewTaskContent);
		}
		setNewTaskContent("");
		inputFocus.current.focus();
	};

	return (
		<StyledForm onSubmit={onFormSubmit}>
			<StyledInput
				value={newTaskContent}
				onChange={({ target }) => setNewTaskContent(target.value)}
				type="text"
				ref={inputFocus}
			/>
			<StyledButton>Dodaj zadanie</StyledButton>
		</StyledForm>
	);
};

export default Form;
