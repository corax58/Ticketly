import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/features/authSlice";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSucces] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const login = async (values: any) => {
    setIsLoading(true);
    setIsSucces(false);
    setError("");
    setIsError(false);
    const res = await axios
      .post("http://localhost:4000/api/user/login", values)
      .then((res) => {
        setIsLoading(false);
        setIsSucces(true);
        dispatch(loginUser(res.data));
        navigate("/");
      })
      .catch((err) => {
        setIsError(true);
        setError(err.response.data.error);
      });
    setIsLoading(false);
    return res;
  };
  const signup = async (values: any) => {
    setIsLoading(true);
    setIsSucces(false);
    setError("");
    setIsError(false);
    const res = await axios
      .post("http://localhost:4000/api/user/signup", values)
      .then((res) => {
        setIsLoading(false);
        setIsSucces(true);
        dispatch(loginUser(res.data));
        navigate("/");
      })
      .catch((err) => {
        setIsError(true);
        setError(err.response.data.error);
      });
    setIsLoading(false);
    return res;
  };

  return { signup, login, error, isLoading, isSuccess, isError };
}
