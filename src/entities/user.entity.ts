import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { InitiatorAudit } from "../audit/initiator.audit";

@Entity("users")
export class User extends InitiatorAudit {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;

  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
  }
}
