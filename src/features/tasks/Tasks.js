import { Main } from "../../styled";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

function Tasks() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Main>
  );
}

export default Tasks;
