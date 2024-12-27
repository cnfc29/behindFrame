import * as yup from "yup";

export const scheme = yup.object().shape({
  description: yup.string().required("Описание обязательно"),
  image: yup.string().required("Ссылка на фото обязательна"),
});
