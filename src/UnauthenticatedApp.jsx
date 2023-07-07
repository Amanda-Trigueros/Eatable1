import { Routes, Route, Navigate } from "react-router";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/sign-up-page";

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default UnauthenticatedApp;
