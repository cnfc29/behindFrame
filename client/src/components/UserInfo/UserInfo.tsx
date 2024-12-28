import { useAppSelector } from "../../hooks/reduxHooks";
import styles from "./UserInfo.module.css";

export function UserInfo({ postsCount }: { postsCount: number }) {
  const user = useAppSelector((state) => state.auth.userData);
  return (
    <div className={styles.container}>
      {user.status === "logged" && (
        <div>
          <img className={styles.image} src={user.image} />
          <div>{user.name}</div>
        </div>
      )}
      {user.status === "logged" && (
        <div>
          <div>{user.login}</div>
          <div>
            <b>{postsCount} </b>
            {/* {postsCount === 1
              ? "публикация"
              : user.postsCount === 2 ||
                user.postsCount === 3 ||
                user.postsCount === 4
              ? "публикации"
              : "публикаций"} А если postsCount === 42? Будет '42 публикаций. Поправь'
              Все это вынести в отдельный helper который принимает параметр и склоняет */}
          </div>
        </div>
      )}
    </div>
  );
}
