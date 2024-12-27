import * as yup from "yup";

export const scheme = yup.object().shape({
  login: yup
    .string()
    .required("Логин обязателен")
    .min(5, "Логин должен содержать не менее 5 символов"),
  password: yup
    .string()
    .required("Пароль обязателен")
    .min(5, "Пароль должен содержать не менее 5 символов"),
});
