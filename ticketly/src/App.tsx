import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./App.css";
import { RootState } from "./store/store";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated]);
  if (!isAuthenticated) return null;
  return <div>hello</div>;
}

export default App;
