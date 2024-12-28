import { NavLink } from "react-router-dom";
import { PostType } from "../../types/postsType";
import { PostCard } from "../../ui/PostCard";
import styles from "./PostsList.module.css";
import { ROUTER } from "../../../router";

export function PostsList({ posts }: { posts: PostType[] }) {
  if (posts.length === 0) { // Можно заменить на '!posts.length', будет то же самое, но короче
    return (
      <div className={styles.emptyList}>
        <div>У вас пока нет публикаций</div>
        <NavLink className={styles.link} to={ROUTER.addPost}>Добавить публикацию</NavLink>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
