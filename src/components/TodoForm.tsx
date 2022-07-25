import { PlusCircle } from "phosphor-react";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { v4 as uuidV4 } from "uuid";
import styles from "./todo-form.module.css";

interface TaskListProps {
  tasksList: TaskList[];
  setTasksList: Dispatch<
    SetStateAction<
      {
        id: string;
        title: string;
        done: boolean;
      }[]
    >
  >;
}

interface TaskList {
  id: string;
  title: string;
  done: boolean;
}

export function TodoForm({ tasksList, setTasksList }: TaskListProps) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasksList([
      ...tasksList,
      {
        id: uuidV4(),
        title: newTask,
        done: false,
      },
    ]);

    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event?.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.text}
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button onClick={handleCreateNewTask} className={styles.button}>
        <span>Criar</span>
        <PlusCircle size={24} />
      </button>
    </div>
  );
}
