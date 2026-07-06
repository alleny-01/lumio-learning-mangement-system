import { Route, Routes } from "react-router-dom";
import AuthCallback from "@/components/auth/AuthCallback";
import SigninPage from "./features/authentication/pages/Signin";
import SignupPage from "./features/authentication/pages/Signup";
import AppLayout from "./layouts/AppLayout";
import ForgotPassword from "./features/authentication/pages/ForgotPassword";
import LMSProvider from "@/contexts/LMSContext";
import CourseCatalog from "@/features/courses/catalog/pages/CourseCatalog";
import CourseDetailPage from "@/features/courses/detail/pages/CourseDetail";
import EmailConfirmation from "./features/authentication/pages/EmailConfirmation";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import DashboardPage from "./features/dashboard/pages/DashboardPage";

function App() {
  return (
    <LMSProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <CourseCatalog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              <ProtectedRoute>
                <CourseDetailPage />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </LMSProvider>
  );
}

export default App;
