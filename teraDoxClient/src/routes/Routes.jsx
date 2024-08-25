import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Studennts from "../pages/Studennts";
import AdmissionForm from "../pages/AdmissionForm";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: "/students",
        element: <Studennts></Studennts>
      },
      {
        path: "/details/:id",
        element: <Details></Details>
      },
      {
        path:"/admission",
        element:<AdmissionForm></AdmissionForm>
      }
    ]
  },
]);

export default router;
