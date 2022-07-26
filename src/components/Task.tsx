import { ClipboardText, Trash } from "phosphor-react";
import { useState } from "react";
import { tasks } from "../data/tasks";
import { Counter } from "./Counter";
import styles from "./task.module.css";
import { TodoForm } from "./TodoForm";

export function Task() {
  const [isTask, setIsTask] = useState(true);
  const [tasksList, setTasksList] = useState(tasks);

  function handleToggleTask(taskId: string) {
    const newTasksList = tasksList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasksList(newTasksList);
  }

  function handleDeleteTask(taskId: string) {
    const newTasksList = tasksList.filter((task) => task.id !== taskId);

    setTasksList(newTasksList);
  }

  return (
    <>
      <TodoForm tasksList={tasksList} setTasksList={setTasksList} />
      <Counter tasksList={tasksList} />

      {isTask === false && (
        <article className={styles.isNotTaskContainer}>
          <ClipboardText />
          <h2>Você ainda não tem tarefas cadastradas</h2>
          <h3>Crie tarefas e organize seus items a fazer</h3>
        </article>
      )}

      {tasksList.map((task) => (
        <div key={task.id} className={styles.taskContainer}>
          <input
            type='checkbox'
            onChange={() => handleToggleTask(task.id)}
            checked={task.done}
            value='None'
            id={`task-${task.id}`}
            name='check'
          />
          <label htmlFor={`task-${task.id}`}>{task.title}</label>
          <button onClick={() => handleDeleteTask(task.id)}>
            <Trash size={24} />
          </button>
        </div>
      ))}
    </>
  );
}
