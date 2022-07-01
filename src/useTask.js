import { useEffect, useState } from "react";

export const useTask = () => {
  const getLoadTask = () => JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(getLoadTask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
};
