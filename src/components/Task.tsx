import { ClipboardText, Trash } from "phosphor-react";
import { useState } from "react";
import { tasks } from "../data/tasks";
import { Counter } from "./Counter";
import styles from "./task.module.css";
import { TodoForm } from "./TodoForm";

export function Task() {
  const [isTask, setIsTask] = useState(true);
  const [tasksList, setTasksList] = useState(tasks);
  const [addTask, setAddTask] = useState(tasks);

  function handleToggleTask(task: string) {
    console.log(task);

    // const newTaskList = setTaskList();
  }

  return (
    <>
      <TodoForm tasksList={tasksList} setTasksList={setTasksList} />
      <Counter />

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
            checked={task.done}
            onChange={() => handleToggleTask(task.id)}
            value='None'
            id='roundedTwo'
            name='check'
          />
          <label htmlFor='roundedTwo'>{task.title}</label>
          <Trash size={24} />
        </div>
      ))}
    </>
  );
}
