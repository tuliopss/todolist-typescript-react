import { useRef } from "react";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = (e: React.MouseEvent): void => {
    modalRef.current!.classList.add("hide");
  };

  return (
    <div id='modal_container' className='hide' ref={modalRef}>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Edite a sua tarefa</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
