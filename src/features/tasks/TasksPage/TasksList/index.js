import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectHideDone,
  removeTask,
  toggleTaskDone,
  selectTaskByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import removeIcon from "./images/remove.png";
import doneIcon from "./images/done.png";
import {
  List,
  ListItem,
  DoneButton,
  RemoveButton,
  ContentTask,
  TaskLink,
} from "./styled";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <ListItem hidden={hideDone && task.done} key={task.id}>
          <DoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? <img src={doneIcon} alt="Oznacz jako wykonane" /> : ""}
          </DoneButton>
          <ContentTask taskDone={task.done}>
            <TaskLink to={`/zadania/${task.id}`}>{task.content}</TaskLink>
          </ContentTask>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            <img src={removeIcon} alt="usuń z listy" />
          </RemoveButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TasksList;
