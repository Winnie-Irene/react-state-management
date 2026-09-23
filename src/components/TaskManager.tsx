import { useReducer, useState } from "react";
import { taskReducer, type TaskState } from "../reducers/taskReducer";
import { useTheme } from "../hooks/useTheme";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

const initialTasks: TaskState = [];

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [task, setTask] = useState("");
  const { theme } = useTheme();
  const themeClass = theme === LIGHT_THEME ? styles.light : styles.dark;

  const addTask = () => {
    const trimmedTask = task.trim();
    if (!trimmedTask) return;
    dispatch({ type: "add", payload: trimmedTask });
    setTask("");
  };

  const removeTask = (id: number) => {
    dispatch({ type: "remove", payload: id });
  };

  return (
    <div className={`${styles.container} ${themeClass}`}>
      <h2>Task Manager</h2>
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          type="button"
          className={styles.button}
          onClick={addTask}
          disabled={!task.trim()}
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks yet</p>
      ) : (
        <ul className={styles.list}>
          {tasks.map((t) => (
            <li key={t.id} className={styles.item}>
              <span>{t.text}</span>
              <button
                type="button"
                className={styles.button}
                onClick={() => removeTask(t.id)}
                aria-label={`Remove ${t.text}`}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskManager;