import { Header } from "../components/Header";
import { Task } from "../components/Task";
import styles from "./todo.module.css";

export function Todo() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Task />
      </div>
    </>
  );
}
