import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RoutesLog } from "./RoutesLog";
import { childrenOneOnOneRoutes } from "./childrenOneOnOneRoutes";


const routesConfig = createBrowserRouter([
    {
        path:'/',
        element:(
            <>
                <RoutesLog/>
            </>
        ),
        children: childrenOneOnOneRoutes
    }
])

export const AppRouter = ()=>{
    return <RouterProvider router={routesConfig}/>
}