import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import HomePage from "./pages/homePages/homePage.jsx";
import Login from "./pages/login&register/login.jsx";
import Register from "./pages/login&register/register.jsx";
import AdminDashboard from "./pages/adminPages/adminDashboard.jsx";
import ManageAlbum from "./pages/adminPages/manageAlbum/manageAlbum.jsx";
import EditAlbum from "./pages/adminPages/manageAlbum/editAlbum.jsx";
import ManageWallpaper from "./pages/adminPages/manageWallpaper/manageWallpaper.jsx";
import UsersPage from "./pages/adminPages/usersPage.jsx";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={createBrowserRouter([
                    {path: "/", element: <HomePage/>},
                    {path: "/login", element: <Login/>},
                    {path: "/register", element: <Register/>},
                    {path: "/AdminDashboard", element: <AdminDashboard/>},
                    {path: "/ManageAlbum", element: <ManageAlbum/>},
                    {path: "/EditAlbum/:pk_id", element: <EditAlbum/>},
                    {path: "/ManageWallpaper", element: <ManageWallpaper/>},
                    {path: "/UsersPage", element: <UsersPage/>},
                ])} />
            </QueryClientProvider>
        </>
    )
}

export default App
