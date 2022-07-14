import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskbyId } from "../tasksSlice";
import { Main } from "../../../styled";
import { Completed } from "./styled";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskbyId(state, id));

  return (
    <Main>
      <Header title="Szczegóły zadania" />

      <Section
        title={task ? task.content : "Brak zadania"}
        body={
          !!task && (
            <Completed>
              <strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"}
            </Completed>
          )
        }
      />
    </Main>
  );
};

export default TaskPage;
