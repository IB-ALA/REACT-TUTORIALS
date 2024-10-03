import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/register";
import AuthPage from "./pages/private-route";
import ProfilePage from "./pages/profile";
import LoginPage from "./pages/login";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={
            <AuthPage>
              <ProfilePage />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}
