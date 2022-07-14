import Header from "../../common/Header";
import Section from "../../common/Section";
import { Main } from "../../styled";
import Content from "./Content";

const AuthorPage = () => (
  <Main>
    <Header title="Autor aplikacji" />
    <Section title="Maciej Rościszewski" body={<Content />} />
  </Main>
);

export default AuthorPage;
