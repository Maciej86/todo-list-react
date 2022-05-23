import {
	StyledList,
	StyledListItem,
	StyledButton,
	StyledContentTask,
} from "./styled";
import removeIcon from "./images/remove.png";
import doneIcon from "./images/done.png";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<StyledList>
		{tasks.map((task) => (
			<StyledListItem hidden={hideDone && task.done} key={task.id}>
				<StyledButton doneTask onClick={() => toggleTaskDone(task.id)}>
					{task.done ? <img src={doneIcon} alt="Oznacz jako wykonane" /> : ""}
				</StyledButton>
				<StyledContentTask taskDone={task.done}>
					{" "}
					{task.content}
				</StyledContentTask>
				<StyledButton removeTask onClick={() => removeTask(task.id)}>
					<img src={removeIcon} alt="usuń z listy" />
				</StyledButton>
			</StyledListItem>
		))}
	</StyledList>
);

export default Tasks;
