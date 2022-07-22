import { Counter } from "../components/Counter";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { TodoForm } from "../components/TodoForm";
import styles from "./todo.module.css";

export function Todo() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <TodoForm />
        <Counter />
        <Task />
      </div>
    </>
  );
}
