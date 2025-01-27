import Layout from "../layout"
import { Route, Routes } from "react-router-dom"
import { MAIN_ROUTES } from "./main";
import { AUTH_ROUTES } from "./auth";
import ErrorPage from "@/pages/404/Error";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
{MAIN_ROUTES} {AUTH_ROUTES}
            </Route>
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}
export default AppRoutes;