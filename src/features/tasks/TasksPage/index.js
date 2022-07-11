import Form from "../TasksPage/Form";
import TasksList from "../TasksPage/TasksList";
import Buttons from "../TasksPage/Buttons";
import ExampleTasks from "../TasksPage/FetchExampleTasks";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Main } from "../../../styled";
import Search from "./Search";

const TasksPage = () => {
  return (
    <Main>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasks />}
        body={<Form />}
      />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TasksList />}
      />
    </Main>
  );
};

export default TasksPage;
