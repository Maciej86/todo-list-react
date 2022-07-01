import { Button, WraperButton } from "../Buttons/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, toggleHideAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <WraperButton>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(toggleHideAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </WraperButton>
  );
};

export default Buttons;
