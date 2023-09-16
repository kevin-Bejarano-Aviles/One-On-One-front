import { AllUsers } from "../pages/AllUsers";
import { CreateUser } from "../pages/CreateUser";
import { Home } from "../pages/Home";
import { OneUser } from "../pages/OneUser";
import { PutUser } from "../pages/PutUser";


export const childrenOneOnOneRoutes = [
    {
        path:'/',element:<Home/>
    },
    {
        path:'/user',element:<AllUsers/>
    },
    {
        path:'/user/:id',element:<OneUser/>
    },
    {
        path:'/user/:id/update',element:<PutUser/>
    },
    {
        path:'/user/create',element:<CreateUser/>
    }

]

