import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { InitiatorAudit } from "../audit/initiator.audit";
import { EAccountStatus } from "../enums/EAccountStatus.enum";
import { EVisibility } from "../enums/EVisibibility.enum";
import { UUID } from "crypto";
@Entity("patients")
export class Patient extends InitiatorAudit {
  @PrimaryGeneratedColumn()
  nationalId: UUID;
  @Column({ nullable: true })
  firstName: string;

  @Column({
    default: EAccountStatus[EAccountStatus.WAITING_FOR_EMAIL_VERIFICATION],
  })
  status: string;

  @Column({ default: EVisibility[EVisibility.VISIBLE] })
  visibility: string;

  constructor(name: string) {
    super();
    this.firstName = name;
  }
}
