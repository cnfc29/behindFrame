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
            {postsCount === 1
              ? "публикация"
              : postsCount === 2 || postsCount === 3 || postsCount === 4
              ? "публикации"
              : "публикаций"}
          </div>
        </div>
      )}
    </div>
  );
}
