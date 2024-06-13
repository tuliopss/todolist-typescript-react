import styles from "./TaskForm.module.css";
import { ITask } from "../../interfaces/Task";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [taskName, setTaskName] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = {
      id,
      taskName,
      difficulty,
    };

    setTaskList!([...taskList, newTask]);
    setTaskName("");
    setDifficulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "taskName":
        setTaskName(e.target.value);
        break;

      case "difficulty":
        setDifficulty(parseInt(e.target.value));
        break;
    }
  };

  return (
    <form id={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor='taskName'>Task name:</label>
        <input
          type='text'
          name='taskName'
          placeholder='Task name'
          onChange={handleChange}
          value={taskName}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Difficulty:</label>
        <input
          type='text'
          name='difficulty'
          placeholder='Task difficulty'
          onChange={handleChange}
          value={difficulty}
        />
      </div>

      <input type='submit' value={btnText} />
    </form>
  );
};

export default TaskForm;
