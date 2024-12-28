import { AuthInput } from "../../ui/AuthInput";
import { Button } from "../../ui/Button";
import { TitleBlock } from "../../ui/TitleBlock";
import styles from "./AddPostForm.module.css";
import { useAddPostForm } from "./hooks/useAddPostForm";

export function AddPostForm() {
  const { register, handleSubmit, errors, onSubmit, loading } =
    useAddPostForm();
  return (
    <div className={styles.container}>
      <form className={styles.inputList} onSubmit={handleSubmit(onSubmit)}>
        <TitleBlock>Добавить публикацию</TitleBlock>

        <AuthInput
          placeholder="Ссылка на фото к публикации"
          {...register("image")}
        />
        {errors.image && (
          <span className={styles.error}>{errors.image.message}</span>
        )}

        <AuthInput placeholder="Описание к фото" {...register("description")} />
        {errors.description && (
          <span className={styles.error}>{errors.description.message}</span>
        )}

        {loading ? (
          <div>Отправляем данные ...</div>
        ) : (
          <Button type="submit">Добавить</Button>
        )}
      </form>
    </div>
  );
}
