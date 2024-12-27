export type UserType = {
  id: number;
  name: string;
  login: string;
  image: string;
  password: string;
};

export type UserState =
  | { status: "guest" }
  | { status: "fetching" }
  | ({ status: "logged" } & Omit<UserType, "password">);

export type InitialUserType = {
  accessToken: string;
  userData: UserState;
};

export type AuthSignUpType = Omit<UserType, "id">;
export type AuthSignInType = Omit<UserType, "id" | "name" | "image">;

export type AuthResponseType = {
  accessToken: string;
  user: Omit<UserType, "password">;
};
