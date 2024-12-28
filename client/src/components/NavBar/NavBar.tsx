import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { TitleBlock } from "../../ui/TitleBlock";
import styles from "./NavBar.module.css";
import { ROUTER } from "../../../router";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { logoutThunk } from "../../redux/thunksActions/authThunkActions";

export function NavBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = (): void => {
    void dispatch(logoutThunk()); // Зачем void?
  };

  return (
    <div className={styles.container}>
      <TitleBlock onClick={() => navigate(ROUTER.main)}>Moment</TitleBlock>
      <div className={styles.buttonList}>
        <Button type="button" onClick={() => navigate(ROUTER.addPost)}>
          Добавить
        </Button>
        <Button type="button" onClick={() => navigate(ROUTER.main)}>
          Лента
        </Button>
        <Button type="button" onClick={() => navigate(ROUTER.profile)}>
          Профиль
        </Button>

        <Button type="button" onClick={logoutHandler}>
          Выход
        </Button>
      </div>
    </div>
  );
}
