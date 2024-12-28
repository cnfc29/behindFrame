import type { AxiosInstance } from "axios";
import { axiosInstance } from "../axiosInstance";
import type { PostType, PostTypeAdd } from "../../types/postsType";

class AuthAPI {
  // Почему класс называется AuthAPI?
  constructor(private readonly api: AxiosInstance) {}

  getMyPosts(): Promise<PostType[]> {
    return this.api<PostType[]>("/api/posts/my").then(({ data }) => data);
  }

  addMyPost(data: PostTypeAdd): Promise<PostType> {
    return this.api.post<PostType>("/api/posts", data).then(({ data }) => data);
  }
}

export const postAPI = new AuthAPI(axiosInstance);
