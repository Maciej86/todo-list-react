import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, loadingTasks } from "../tasksSlice";
import { Button } from "../Button";

const ExampleTasks = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingTasks);
  return (
    <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania "}
    </Button>
  );
};

export default ExampleTasks;
