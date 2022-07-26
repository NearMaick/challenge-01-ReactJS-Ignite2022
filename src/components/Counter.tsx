import styles from "./counter.module.css";

interface TaskListProps {
  tasksList: TaskList[];
}
interface TaskList {
  id: string;
  title: string;
  done: boolean;
}

export function Counter(taskList: TaskListProps) {
  const createdTasks = taskList.tasksList.length;
  const tasksDone = taskList.tasksList.filter(
    (task) => task.done === true
  ).length;

  return (
    <div className={styles.container}>
      <div>
        <strong className={styles.taskCreated}>Tarefas criadas</strong>
        <span>{taskList.tasksList.length}</span>
      </div>
      <div>
        <strong className={styles.taskDone}>Concluídas</strong>
        <span>
          {tasksDone} de {createdTasks}
        </span>
      </div>
    </div>
  );
}
