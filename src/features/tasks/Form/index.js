import { useState, useEffect, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

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
      <Input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        ref={inputFocus}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
