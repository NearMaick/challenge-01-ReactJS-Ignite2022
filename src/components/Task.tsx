import { ClipboardText, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./task.module.css";

export function Task() {
  const [isTask, setIsTask] = useState(true);

  return (
    <>
      {isTask === false ? (
        <article className={styles.isNotTaskContainer}>
          <ClipboardText />
          <h2>Você ainda não tem tarefas cadastradas</h2>
          <h3>Crie tarefas e organize seus items a fazer</h3>
        </article>
      ) : (
        <div className={styles.taskContainer}>
          <input type='checkbox' value='None' id='roundedTwo' name='check' />
          <label htmlFor='roundedTwo'>
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
            commodo tempor.
          </label>
          <Trash size={24} />
        </div>
      )}
    </>
  );
}
