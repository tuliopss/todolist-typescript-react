import { useRef, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskForm from "./components/Form/TaskForm";
import TaskList from "./components/TaskList";
import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  // const toggleModal = (display: boolean) => {
  //   const modal = document.querySelector("#modal_container");

  //   if (modal) {
  //     modal!.classList.remove("hide");
  //     console.log("open");
  //   } else {
  //     modal!.classList.add("hide");
  //     console.log("close");
  //   }
  // };

  const toggleModal = (display: boolean) => {
    const modal = document.querySelector("#modal_container");

    if (modal) {
      if (display) {
        modal.classList.remove("hide");
        console.log("open");
      } else {
        modal.classList.add("hide");
        console.log("close");
      }
    }
  };

  const editTask = (task: ITask): void => {
    toggleModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, taskName: string, difficulty: number) => {
    const updatedTask: ITask = { id, taskName, difficulty };

    const updatedItems = taskList.map((task) => {
      return updatedTask.id === task.id ? (task = updatedTask) : task;
    });

    setTaskList(updatedItems);
    toggleModal(false);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText='Editar tarefa'
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main id={styles.main}>
        <div>
          <h2>Anote suas tarefas:</h2>
          <TaskForm
            btnText='Create task'
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
