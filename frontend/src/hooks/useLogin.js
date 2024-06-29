import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from "../service/SignUpService";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const nagivate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(BASE_URL + "/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //1. save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //2. update the auth context
      dispatch({ type: "LOGIN", payload: json });

      //3. update loading state
      setIsLoading(false);
      nagivate("/dashboard"); // redirect the user to the dashboard
    }
  };

  return { login, isLoading, error };
};
