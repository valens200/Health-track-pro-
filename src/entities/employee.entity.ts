import { Entity } from "typeorm";
import { User } from "./user.entity";

@Entity("employees")
export class Employee extends User {
  constructor(
    firstName: string,
    lastName: string,
    password: string,
    email: string
  ) {
    super(firstName, lastName, password, email);
  }
}
