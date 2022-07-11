import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./common/Navigation";
import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";

const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/zadania/:id" element={<TaskPage />} />
      <Route path="/zadania" element={<Tasks />} />
      <Route path="/autor" element={<Author />} />
    </Routes>
  </HashRouter>
);

export default App;
