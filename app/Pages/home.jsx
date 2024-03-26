"use client";
import Login from "../Components/Login/Login";
import { useAuth } from "@/app/context/authcontext";
import styles from "./home.module.css";
import UserDashboard from "../Components/UserDashboard/UserDashboard";

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <div className={styles.main}>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </div>
  );
}
