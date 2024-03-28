import { useAuth } from "@/app/context/authcontext";
import styles from "./UserDashboard.module.css";
import { useEffect, useState } from "react";
import TodoCard from "../TodoCard/TodoCard";
import { doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "../../../firebase";
import useFetchTodos from "@/app/hooks/fetchTodos";

const UserDashboard = () => {
  const { currentUser, login, signup, logout, userInfo } = useAuth();
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState("");

  const { todos, loading, error, setTodos } = useFetchTodos();

  console.log(todos);

  useEffect(() => {
    if (!userInfo || Object.keys(userInfo).length === 0) {
      setAddTodo(true);
    }
  }, [userInfo]);

  async function handleAddTodo() {
    if (!todo) return;

    const newKey =
      Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1;
    setTodos({ ...todos, [newKey]: todo });

    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        todos: {
          [newKey]: todo,
        },
      },
      { merge: true }
    );

    setTodo("");
    setAddTodo(false);
  }

  function handleDelete(todoKey) {
    return async () => {
      const tempObj = { ...todos };
      delete tempObj[todoKey];
      setTodos(tempObj);
      const userRef = doc(db, "users", currentUser.uid);
      await setDoc(
        userRef,
        {
          todos: {
            [todoKey]: deleteField(),
          },
        },
        { merge: true }
      );
    };
  }

  return (
    <div className={styles.dashboardContainer}>
      {userInfo && !loading && todos && (
        <>
          {Object.keys(todos).map((todo, index) => {
            return (
              <TodoCard key={index} todoKey={todo} handleDelete={handleDelete}>
                {todos[todo]}
              </TodoCard>
            );
          })}
        </>
      )}{" "}
      {addTodo && (
        <div className={styles.inputContainer}>
          <input
            className={styles.inputTodo}
            type="text"
            placeholder="enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          ></input>
          <div onClick={handleAddTodo} className={styles.BTNaddSmall}>
            ADD
          </div>
        </div>
      )}
      {!addTodo && (
        <button
          onClick={() => setAddTodo(true)}
          className={`${styles.box} ${styles.BTNaddTodo}`}
        >
          ADD TODO
        </button>
      )}
    </div>
  );
};

export default UserDashboard;
