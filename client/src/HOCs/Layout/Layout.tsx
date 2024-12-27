import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { refreshThunk } from "../../redux/thunksActions/authThunkActions";

export function Layout(): JSX.Element {
  const user = useAppSelector((state) => state.auth.userData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      {user.status === "fetching" ? (
        <div>Загрузка ...</div>
      ) : (
        <>
          {user.status === "logged" && <NavBar />}
          <Outlet />
        </>
      )}
    </div>
  );
}
