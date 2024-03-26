import Image from "next/image";
import styles from "./page.module.css";
import Login from "./Components/Login/Login";
import globalStyles from "./globals.css";
import { AuthProvider, useAuth } from "./context/authcontext";
import Home from "./Pages/home";
import RootLayout from "./layout";

export default function App() {
  return (
    <AuthProvider>
      <main className={styles.main}>
        <Home />
      </main>
    </AuthProvider>
  );
}
