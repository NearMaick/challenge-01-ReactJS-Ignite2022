import styles from "./counter.module.css";

export function Counter() {
  return (
    <div className={styles.container}>
      <div>
        <strong className={styles.taskCreated}>Tarefas criadas</strong>
        <span>5</span>
      </div>
      <div>
        <strong className={styles.taskDone}>Concluídas</strong>
        <span>2 de 5</span>
      </div>
    </div>
  );
}
