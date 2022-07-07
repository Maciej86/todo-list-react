import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectHideDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
  toggleHideDone,
  toggleHideAllDone,
} from "../tasksSlice";
import { Button, WraperButton } from "../Buttons/styled";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const isEvryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTaskEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    <WraperButton>
      {!areTaskEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(toggleHideAllDone())}
            disabled={isEvryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </WraperButton>
  );
};

export default Buttons;
