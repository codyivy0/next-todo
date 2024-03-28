"use client";
import { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "@/app/context/authcontext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { currentUser, login, signup } = useAuth();
  console.log(currentUser)

  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
      } catch (err) {
        setError("Incorrect email or password");
      }
      return;
    }
    await signup(email, password);
  }

  return (
    <div>
      <section className={styles.container}>
        <h1 className={styles.bold}>{isLoggingIn ? "LOGIN" : "REGISTER"}</h1>
        {error && <p>{error}</p>}
        <input
          className={`${styles.box}`}
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`${styles.box}`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={`${styles.box} ${styles.BTNsubmit}`}
          onClick={() => submitHandler()}
        >
          SUBMIT
        </button>
        {/* <h3
          className={styles.BTNLoginRegister}
          onClick={() => setIsLoggingIn(!isLoggingIn)}
        >
          {!isLoggingIn ? "Login" : "Register"}
        </h3> */}
      </section>
    </div>
  );
};

export default Login;
