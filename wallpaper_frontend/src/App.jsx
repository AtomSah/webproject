import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import HomePage from "./pages/homePages/homePage.jsx";
import Login from "./pages/login&register/login.jsx";
import Register from "./pages/login&register/register.jsx";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={createBrowserRouter([
                    {path: "/", element: <HomePage/>},
                    {path: "/login", element: <Login/>},
                    {path: "/register", element: <Register/>},
                ])} />
            </QueryClientProvider>
        </>
    )
}

export default App
