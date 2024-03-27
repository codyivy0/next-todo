"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <header className={styles.header}>
        <h1>TODO LIST</h1>
        <Image
          className={styles.iconUser}
          src="/user-128.svg"
          alt="user"
          width={40}
          height={40}
          onClick={() => setOpenModal(true)}
        />
      </header>
    </>
  );
};

export default Header;
