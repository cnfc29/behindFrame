export type PostType = {
  id: number;
  image: string;
  description: string;
  userId: number;
};

export type PostTypeAdd = Omit<PostType, "id" | "userId">;
