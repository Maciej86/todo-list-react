import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectHideDone,
  removeTask,
  toggleTaskDone,
} from "../tasksSlice";
import removeIcon from "./images/remove.png";
import doneIcon from "./images/done.png";
import {
  List,
  ListItem,
  DoneButton,
  RemoveButton,
  ContentTask,
} from "./styled";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <ListItem hidden={hideDone && task.done} key={task.id}>
          <DoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? <img src={doneIcon} alt="Oznacz jako wykonane" /> : ""}
          </DoneButton>
          <ContentTask taskDone={task.done}> {task.content}</ContentTask>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            <img src={removeIcon} alt="usuń z listy" />
          </RemoveButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TasksList;