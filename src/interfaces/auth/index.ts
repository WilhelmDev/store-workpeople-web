import { User } from "../user";

export interface AuthUser extends User {
  token: string;
}