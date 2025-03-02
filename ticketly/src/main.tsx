import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import NavigationLayout from "./layouts/NavigationLayout.tsx";
import Login from "./pages/Login.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Signup from "./pages/Signup.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<NavigationLayout />}>
            <Route index element={<App />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Toaster theme="light" richColors />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
