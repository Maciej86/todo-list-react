import {
	List,
	ListItem,
	DoneButton,
	RemoveButton,
	ContentTask,
} from "./styled";
import removeIcon from "./images/remove.png";
import doneIcon from "./images/done.png";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<List>
		{tasks.map((task) => (
			<ListItem hidden={hideDone && task.done} key={task.id}>
				<DoneButton onClick={() => toggleTaskDone(task.id)}>
					{task.done ? <img src={doneIcon} alt="Oznacz jako wykonane" /> : ""}
				</DoneButton>
				<ContentTask taskDone={task.done}> {task.content}</ContentTask>
				<RemoveButton onClick={() => removeTask(task.id)}>
					<img src={removeIcon} alt="usuń z listy" />
				</RemoveButton>
			</ListItem>
		))}
	</List>
);

export default Tasks;
