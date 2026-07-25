import { Route, Routes } from "react-router-dom";
import AuthCallback from "@/components/auth/AuthCallback";
import SigninPage from "./features/authentication/pages/Signin";
import SignupPage from "./features/authentication/pages/Signup";
import AppLayout from "./layouts/AppLayout";
import ForgotPassword from "./features/authentication/pages/ForgotPassword";
import LMSProvider from "@/contexts/LMSContext";
import CourseCatalog from "@/features/courses/catalog/pages/CourseCatalog";
import CourseDetailPage from "@/features/courses/detail/pages/CourseDetail";
import InstructorCoursesPage from "@/features/courses/builder/pages/InstructorCoursesPage";
import EmailConfirmation from "./features/authentication/pages/EmailConfirmation";
import ProtectedRoute, { PublicOnlyRoute } from "./components/auth/ProtectedRoute";
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import MyLearningPage from "./features/dashboard/pages/MyLearningPage";
import ViewerPage from "./features/viewer/pages/ViewerPage";
import SettingsPage from "./features/settings/pages/SettingsPage";
import LandingPage from "./landing/pages/LandingPage";
import ResetPassword from "./features/authentication/pages/ResetPassword";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";

function App() {
  return (
    <LMSProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="signin"
            element={
              <PublicOnlyRoute>
                <SigninPage />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicOnlyRoute>
                <SignupPage />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="forgot-password"
            element={
              <PublicOnlyRoute>
                <ForgotPassword />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="forgotpassword"
            element={
              <PublicOnlyRoute>
                <ForgotPassword />
              </PublicOnlyRoute>
            }
          />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="email-confirmation" element={<EmailConfirmation />} />
          <Route path="auth/callback" element={<AuthCallback />} />
          <Route
            element={
              <ProtectedRoute>
                <AuthenticatedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="learning" element={<MyLearningPage />} />
            <Route path="courses" element={<CourseCatalog />} />
            <Route path="instructor/courses" element={<InstructorCoursesPage />} />
            <Route path="courses/:courseId" element={<CourseDetailPage />} />
            <Route path="viewer" element={<ViewerPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </LMSProvider>
  );
}

export default App;
