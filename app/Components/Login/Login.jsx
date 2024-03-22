"use client";
import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
  }

  return (
    <div>
      <section className={styles.container}>
        <h1>LOGIN</h1>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => submitHandler()}>Login</button>
        <h2 onClick={() => setIsLoggingIn(!isLoggingIn)}>
          {!isLoggingIn ? "Login" : "Register"}
        </h2>
      </section>
    </div>
  );
};

export default Login;
