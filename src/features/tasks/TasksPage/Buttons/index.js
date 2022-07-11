import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
  toggleHideDone,
  toggleHideAllDone,
} from "../../tasksSlice";
import { WrapperButton } from "../Buttons/styled";
import { Button } from "../Button";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEvryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTaskEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    <WrapperButton>
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
    </WrapperButton>
  );
};

export default Buttons;
