import { PostType } from "../../types/postsType";
import styles from "./PostCard.module.css";

export function PostCard({ post }: { post: PostType }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={post.image} />
      <div className={styles.text}>{post.description}</div>
    </div>
  );
}
