import { Main } from "../../styled";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import ExampleTasks from "./FetchExampleTasks";
import Section from "../../common/Section";
import Header from "../../common/Header";

function Tasks() {
  return (
    <Main>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasks />}
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TasksList />}
      />
    </Main>
  );
}

export default Tasks;
