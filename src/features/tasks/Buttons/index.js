import { Button, WraperButton } from "../Buttons/styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <WraperButton>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </>
    )}
  </WraperButton>
);

export default Buttons;
