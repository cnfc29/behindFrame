import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { TitleBlock } from "../../ui/TitleBlock";
import styles from "./NavBar.module.css";
import { ROUTER } from "../../../router";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logoutThunk } from "../../redux/thunksActions/authThunkActions";

export function NavBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.userData);

  const logoutHandler = (): void => {
    void dispatch(logoutThunk());
  };

  return (
    <div className={styles.container}>
      <TitleBlock onClick={() => navigate(ROUTER.main)}>Moment</TitleBlock>
      <div className={styles.buttonList}>
        <Button type="button" onClick={() => navigate(ROUTER.main)}>
          Лента
        </Button>
        {user.status === "logged" && (
          <Button
            type="button"
            onClick={() => navigate(`${ROUTER.profile}/${user.login}`)}
          >
            Профиль
          </Button>
        )}

        <Button type="button" onClick={logoutHandler}>
          Выход
        </Button>
      </div>
    </div>
  );
}
