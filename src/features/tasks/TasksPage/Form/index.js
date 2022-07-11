import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import Input from "../Input";
import { StyledForm, Button } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputFocus = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimNewTaskContent = newTaskContent.trim();

    if (trimNewTaskContent !== "") {
      dispatch(
        addTask({
          content: trimNewTaskContent,
          done: false,
          id: nanoid(),
        })
      );
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
