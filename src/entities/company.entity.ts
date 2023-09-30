import { Entity } from "typeorm";
import { Organization } from "./organization.entity";

@Entity("companies")
export class Company extends Organization {}
