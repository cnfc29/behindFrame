import { useAppSelector } from "../../hooks/reduxHooks";
import styles from "./UserInfo.module.css";

export function UserInfo() {
  const user = useAppSelector((state) => state.auth.userData);
  return (
    <div className={styles.container}>
      {user.status === "logged" && <img className={styles.image} src={user.image} />}
      <div>
        <div>{}</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
