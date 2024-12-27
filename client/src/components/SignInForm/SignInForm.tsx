import { NavLink } from "react-router-dom";
import { AuthInput } from "../../ui/AuthInput";
import { Button } from "../../ui/Button";
import { TitleBlock } from "../../ui/TitleBlock";
import styles from "./SignInForm.module.css";
import logoAuth from "@content/logoAuth.webp";
import { ROUTER } from "../../../router";
import { useSignInForm } from "./hooks/useSignInForm";

export function SignInForm() {
  const { register, handleSubmit, errors, onSubmit, loading } = useSignInForm();

  return (
    <div className={styles.container}>
      <form className={styles.inputList} onSubmit={handleSubmit(onSubmit)}>
        <img className={styles.logo} src={logoAuth} />
        <TitleBlock>Moment</TitleBlock>
        <AuthInput placeholder="Логин" {...register("login")} />
        {errors.login && (
          <span className={styles.error}>{errors.login.message}</span>
        )}
        <AuthInput
          placeholder="Пароль"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
        {loading ? (
          <div>Отправляем данные ...</div>
        ) : (
          <Button type="submit">Войти</Button>
        )}

        <span>
          У вас ещё нет аккаунта?{" "}
          <NavLink className={styles.link} to={ROUTER.signUp}>
            {" "}
            Зарегистрироваться
          </NavLink>
        </span>
      </form>
    </div>
  );
}
