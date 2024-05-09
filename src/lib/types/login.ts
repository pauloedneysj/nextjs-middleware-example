export interface IUserData {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  password: string;
  country: string;
  language: number;
  terms: boolean;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  email: string;
  nickName: string;
  token: string;
  userId: string;
}
