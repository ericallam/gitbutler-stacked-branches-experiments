import { User } from "./auth-model.js";

export function me() {
  return new User(1, "eric");
}
