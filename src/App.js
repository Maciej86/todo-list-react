import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./common/Navigation";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/zadania" element={<Tasks />} />
      <Route path="/autor" element={<Author />} />
    </Routes>
  </HashRouter>
);

export default App;
