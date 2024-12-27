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
import { AddPost } from "./pages/AddPost";

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
              redirect={ROUTER.signIn}
            >
              <MainPage />
            </PrivateRouter>
          ),
        },
        {
          path: ROUTER.profile,
          element: (
            <PrivateRouter
              isAllowed={user.status === "logged"}
              redirect={ROUTER.signIn}
            >
              <Profile />
            </PrivateRouter>
          ),
        },
        {
          path: ROUTER.addPost,
          element: (
            <PrivateRouter
              isAllowed={user.status === "logged"}
              redirect={ROUTER.signIn}
            >
              <AddPost />
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
