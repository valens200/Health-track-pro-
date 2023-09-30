import { Entity } from "typeorm";
import { User } from "./user.entity";

@Entity("employees")
export class Employee extends User {}
