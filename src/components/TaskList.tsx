import styles from "./TaskList.module.css";
import { ITask } from "../interfaces/Task";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
}

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.taskName}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' id={styles.edit_icon}></i>
              <i
                className='bi bi-trash'
                id={styles.delete_icon}
                onClick={() => handleDelete(task.id)}></i>
            </div>
          </div>
        ))
      ) : (
        <p>Sem tarefas cadastradas...</p>
      )}
    </>
  );
};

export default TaskList;
