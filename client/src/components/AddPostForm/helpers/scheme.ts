import * as yup from "yup";

// Отдельный сегмент сделать надо под yup схему, не подходит по назначению для /helpers

export const scheme = yup.object().shape({
  description: yup.string().required("Описание обязательно"),
  image: yup.string().required("Ссылка на фото обязательна"),
});
