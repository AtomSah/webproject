import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import HomePage from "./pages/homePages/homePage.jsx";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={createBrowserRouter([
                    {path: "/", element: <HomePage/>},
                ])} />
            </QueryClientProvider>
        </>
    )
}

export default App
