import { Link } from "react-router-dom";

const Navigation = () => (
  <ul>
    <li>
      <Link to="/zadania">Zadania</Link>
    </li>
    <li>
      <Link to="/autor">Autor</Link>
    </li>
  </ul>
);

export default Navigation;
