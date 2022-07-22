import { ClipboardText, PlusCircle, Trash } from "phosphor-react";
import Logo from "../assets/logo.svg";
import styles from "./todo.module.css";

export function Todo() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt='um foguete, todo' />
      </header>
      <div className={styles.container}>
        <div className={styles.todoContainer}>
          <input
            className={styles.todoText}
            type='text'
            placeholder='Adicione uma nova tarefa'
          />
          <button className={styles.todoButton}>
            <span>Criar</span>
            <PlusCircle size={24} />
          </button>
        </div>

        <div className={styles.counterContainer}>
          <div>
            <strong className={styles.taskCreated}>Tarefas criadas</strong>
            <span>5</span>
          </div>
          <div>
            <strong className={styles.taskDone}>Concluídas</strong>
            <span>2 de 5</span>
          </div>
        </div>

        {/* render this screen if no tasks listing */}

        <article className={styles.isNotTaskContainer}>
          <ClipboardText />
          <h2>Você ainda não tem tarefas cadastradas</h2>
          <h3>Crie tarefas e organize seus items a fazer</h3>
        </article>

        {/* tasks listing */}

        <>
          <div className={styles.taskContainer}>
            <input type='checkbox' value='None' id='roundedTwo' name='check' />
            <label htmlFor='roundedTwo'>
              Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in
              eros commodo tempor.
            </label>
            <Trash size={24} />
          </div>

          <div className={styles.taskContainer}>
            <input type='checkbox' value='None' id='roundedTwo' name='check' />
            <label htmlFor='roundedTwo'>
              Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in
              eros commodo tempor.
            </label>
            <Trash size={24} />
          </div>
        </>
      </div>
    </>
  );
}
