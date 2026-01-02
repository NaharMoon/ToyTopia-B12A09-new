import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";
import AuthProvider from "../context/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <AuthProvider>
                <HomeLayout></HomeLayout>
            </AuthProvider>,
    },
    {
        path: "/auth",
        element:
            <AuthProvider>
                <AuthLayout></AuthLayout>
            </AuthProvider>,
        children: [
            {
                path: "/auth/login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "/auth/forgot-password",
                element: <ForgotPassword></ForgotPassword>,
            },
            {
                path: "/auth/register",
                element: <RegisterPage></RegisterPage>,
            },
            {
                path: "/auth/profile",
                element:
                    <PrivateRoute>
                        <ProfilePage></ProfilePage>
                    </PrivateRoute>,
            }
        ]
    },
    {
        path: "/*",
        element: <>Error Page</>
    },
]);
export default router;