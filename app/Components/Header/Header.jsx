import Image from "next/image";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>TODO LIST</h1>
      <Image src="/user-128.svg" alt="user" width={40} height={40}></Image>
    </header>
  );
};

export default Header;
