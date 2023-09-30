import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { InitiatorAudit } from "../audit/initiator.audit";
import { EAccountStatus } from "../enums/EAccountStatus.enum";
import { EVisibility } from "../enums/EVisibibility.enum";
import { UUID } from "crypto";
@Entity("users")
export class User extends InitiatorAudit {
  @PrimaryGeneratedColumn()
  id: UUID;
  @Column({ nullable: true })
  firstName: string;
  @Column({ nullable: true })
  lastName: string;
  @Column()
  email: string;
  @Column({ nullable: true })
  password: string;

  @Column({
    default: EAccountStatus[EAccountStatus.WAITING_FOR_EMAIL_VERIFICATION],
  })
  status: string;

  // @ManyToMany((Role) => Role)
  // roles: Role[];

  @Column({ default: EVisibility[EVisibility.VISIBLE] })
  visibility: string;

  constructor(name: string, lastName: string, password: string, email: string) {
    super();
    this.firstName = name;
    this.email = email;
    this.lastName = lastName;
    this.password = password;
  }
}
