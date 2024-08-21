
import DashboardPage from "@/page/private/dashboard-page";
import PrivateLayout from "@/page/private/layouts/private-loyout";
import RootLayout from "@/page/private/layouts/root-layout";
import Homepage from "@/public/home-page";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "About",
                element: <div>About</div>,
            },
            {
                path: "Dashboard",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />,
                    },
                    {
                        path: "setting",
                        element: <div>Setting</div>,
                    },
                ],
            },
        ],
    },
])