"use client";
import Image from "next/image";
import styles from "./Modal.module.css";
import { useAuth } from "@/app/context/authcontext";

const Modal = (props) => {
  const { setOpenModal } = props;
  const { logout } = useAuth();

  return (
    <section className={styles.modalContainer}>
      <div className={styles.headerBar}>
        <h1>MENU</h1>
        <Image
          className={styles.cursor}
          onClick={() => setOpenModal(false)}
          src="/icon-x.svg"
          alt="close"
          height={40}
          width={40}
        />
      </div>
      <div className={styles.content}>
        <h3
          className={styles.cursor}
          onClick={() => {
            logout();
            setOpenModal(false);
          }}
        >
          LOGOUT
        </h3>
      </div>
    </section>
  );
};

export default Modal;
