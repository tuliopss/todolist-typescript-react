import React from "react";
import { ITask } from "../interfaces/Task";

interface Props {
  taskList: ITask[];
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.taskName}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
              <i className='bi bi-pencil'></i>
              <i className='bi bi-trash'></i>
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
