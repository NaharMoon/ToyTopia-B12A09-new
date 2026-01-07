import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";
import AuthProvider from "../context/AuthProvider";
import HomePage from "../pages/HomePage";
import ToyDetailsPage from "../pages/ToyDetailsPage";
import AllToysPage from "../pages/AllToysPage";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <AuthProvider>
                <HomeLayout></HomeLayout>
            </AuthProvider>,

        children: [
            {
                path: "",
                element: <HomePage></HomePage>,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/all-toys",
                element:
                    <PrivateRoute>
                        <AllToysPage></AllToysPage>
                    </PrivateRoute>,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/toy-details/:id",
                element:
                    <PrivateRoute>
                        <ToyDetailsPage></ToyDetailsPage>
                    </PrivateRoute>,
                loader: () => fetch("/data.json"),
            },
        ]
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