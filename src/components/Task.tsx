import { ClipboardText, Trash } from "phosphor-react";
import styles from "./task.module.css";

export function Task() {
  return (
    <>
      {/* render this screen if no tasks listing */}

      <article className={styles.isNotTaskContainer}>
        <ClipboardText />
        <h2>Você ainda não tem tarefas cadastradas</h2>
        <h3>Crie tarefas e organize seus items a fazer</h3>
      </article>

      {/* tasks listing */}

      <div className={styles.taskContainer}>
        <input type='checkbox' value='None' id='roundedTwo' name='check' />
        <label htmlFor='roundedTwo'>
          Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
          commodo tempor.
        </label>
        <Trash size={24} />
      </div>
    </>
  );
}
