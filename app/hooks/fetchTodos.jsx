"use client";
import { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/authcontext";
import { db } from "../../firebase";

const useFetchTodos = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState({});
  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTodos(docSnap.data().todos);
        }
      } catch (err) {
        setError("failed to load todos");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error, todos, setTodos };
};

export default useFetchTodos;
