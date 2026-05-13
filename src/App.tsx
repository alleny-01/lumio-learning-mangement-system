import { Route, Routes } from "react-router-dom";
import SigninPage from "./features/auth/pages/Signin";
import SignupPage from "./features/auth/pages/Signup";
import AppLayout from "./layouts/AppLayout";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import AuthProvider from "./contexts/AuthContext";
import CourseCatalogPage from "./features/course-catalog/pages/CourseCatalogPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/courses" element={<CourseCatalogPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
