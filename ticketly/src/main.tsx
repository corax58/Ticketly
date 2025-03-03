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
import New from "./pages/New.tsx";
import TicketPage from "./pages/Admin/TicketPage.tsx";
import ProtectedRoutes from "./layouts/ProtectedRoutes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyTickets from "./pages/MyTickets.tsx";
import AllTickets from "./pages/Admin/AllTickets.tsx";
import Admin from "./pages/Admin/Admin.tsx";
import Dashboard from "./pages/Admin/Dashboard.tsx";
import AdminRoutes from "./layouts/AdminRoutes.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route element={<AuthLayout />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route element={<NavigationLayout />}>
                <Route element={<AdminRoutes />}>
                  <Route path="admin">
                    <Route index element={<Admin />} />
                    <Route path="all-tickets">
                      <Route index element={<AllTickets />} />
                      <Route path=":id" element={<TicketPage />} />
                    </Route>
                    <Route path="dashboard" element={<Dashboard />} />
                  </Route>
                </Route>
                <Route path="my-tickets">
                  <Route index element={<MyTickets />} />
                  <Route path="new" element={<New />} />
                  <Route path=":id" element={<TicketPage />} />
                </Route>
              </Route>
            </Route>
          </Routes>
          <Toaster theme="light" richColors />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
