import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppSelector } from "./hooks/reduxHooks";
import { Layout } from "./HOCs/Layout";
import { MainPage } from "./pages/MainPage";
import { PrivateRouter } from "./HOCs/PrivateRouter";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { ROUTER } from "../router";
import "./App.css";
import { Profile } from "./pages/Profile";

function App(): JSX.Element {
  const user = useAppSelector((state) => state.auth.userData);
  const router = createBrowserRouter([
    {
      path: ROUTER.main,
      element: <Layout />,
      children: [
        {
          path: ROUTER.main,
          element: (
            <PrivateRouter
              isAllowed={user.status === "logged"}
              redirect="/signin"
            >
              <MainPage />
            </PrivateRouter>
          ),
        },
        {
          path: ROUTER.signUp,
          element: (
            <PrivateRouter isAllowed={user.status !== "logged"} redirect="/">
              <SignUp />
            </PrivateRouter>
          ),
        },
        {
          path: ROUTER.signIn,
          element: (
            <PrivateRouter isAllowed={user.status !== "logged"} redirect="/">
              <SignIn />
            </PrivateRouter>
          ),
        },
        {
          path: `${ROUTER.profile}/:login`,
          element: <Profile />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
