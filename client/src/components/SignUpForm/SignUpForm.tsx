import { NavLink } from "react-router-dom";
import { AuthInput } from "../../ui/AuthInput";
import { Button } from "../../ui/Button";
import { TitleBlock } from "../../ui/TitleBlock";
import styles from "./SignUpForm.module.css";
import logoAuth from "@content/logoAuth.webp";
import { ROUTER } from "../../../router";
import { useSignUpForm } from "./hooks/useSignUpForm";
export function SignUpForm() {
  const { register, handleSubmit, errors, onSubmit, loading } = useSignUpForm();
  return (
    <div className={styles.container}>
      <form className={styles.inputList} onSubmit={handleSubmit(onSubmit)}>
        <img className={styles.logo} src={logoAuth} />
        <TitleBlock>Moment</TitleBlock>
        <AuthInput placeholder="Имя" {...register("name")} />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
        <AuthInput placeholder="Ссылка на Ваше фото" {...register("image")} />
        {errors.image && (
          <span className={styles.error}>{errors.image.message}</span>
        )}
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
          <Button type="submit">Зарегистрироваться</Button>
        )}
        <span>
          У вас уже есть аккаунт?{" "}
          <NavLink className={styles.link} to={ROUTER.signIn}>
            {" "}
            Войти
          </NavLink>
        </span>
      </form>
    </div>
  );
}
