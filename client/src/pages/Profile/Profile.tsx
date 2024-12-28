import { useEffect } from "react";
import { PostsList } from "../../components/PostsList";
import { UserInfo } from "../../components/UserInfo";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import styles from "./Profile.module.css";
import { getMyPostsThunk } from "../../redux/thunksActions/postsThunkActions";

export function Profile() {
  const dispatch = useAppDispatch();
  const { myPosts, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    void dispatch(getMyPostsThunk()); // Зачем void? Зачем dispatch в dependency array?
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.container}>
        <UserInfo postsCount={myPosts.length} />
        <div>Загружаем Ваши публикации ...</div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <UserInfo postsCount={myPosts.length} />
      <PostsList posts={myPosts} />
    </div>
  );
}
