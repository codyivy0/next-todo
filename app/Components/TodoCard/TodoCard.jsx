import Image from "next/image";
import styles from "./TodoCard.module.css";

const TodoCard = (props) => {
const {children,todoKey, handleDelete} = props

  return (
    <div className={styles.todoContainer}>
      <section className={styles.flexrow}>
        <Image src="/dot.svg" alt="dot" height={30} width={30} /> {children}
      </section>
      <section className={styles.flexrow}>
        {/* <Image
          className={styles.toolIcon}
          src="/pencil.svg"
          alt="edit"
          height={30}
          width={30}
        /> */}
        <Image
        onClick={handleDelete(todoKey)}
          className={styles.toolIcon}
          src="/trash.svg"
          alt="trash"
          height={25}
          width={25}
        />
      </section>
    </div>
  );
};

export default TodoCard;
