import { PlusCircle } from "phosphor-react";
import styles from "./todo-form.module.css";

export function TodoForm() {
  return (
    <div className={styles.container}>
      <input
        className={styles.text}
        type='text'
        placeholder='Adicione uma nova tarefa'
      />
      <button className={styles.button}>
        <span>Criar</span>
        <PlusCircle size={24} />
      </button>
    </div>
  );
}
