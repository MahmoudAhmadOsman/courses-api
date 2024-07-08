import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../service/SignUpService";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(BASE_URL + "/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        // added on 1/16/2024
        setIsLoading(true);
        setError(data.error);
        // console.log("Form Registration Error: ", error.message);
        throw new Error(
          data.error || "All registraion form fields are required!!"
        );
      }

      // Success scenario
      setIsLoading(false);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Success",
        text: "New user registered successfully!!",
        showConfirmButton: false,
        timer: 2500
      });

      localStorage.removeItem("user", JSON.stringify(data));

      setTimeout(() => {
        navigate("/api/users/login");
        window.location.reload();
      }, 2000);

      console.log("New user added: ", data);
    } catch (error) {
      setIsLoading(false);

      setError(error.message);
      console.error("An error occurred during signup:", error.message);
    }
  };

  return { signup, isLoading, error };
};
