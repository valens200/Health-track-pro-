import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import { InitiatorAudit } from "../audit/initiator.audit";
import { EAccountStatus } from "../enums/EAccountStatus.enum";
import { EVisibility } from "../enums/EVisibibility.enum";
import { UUID } from "crypto";
@Entity("patients")
export class Patient extends InitiatorAudit {
  @Column()
  @PrimaryColumn()
  nationalId: string;
  @Column({ nullable: true })
  name: string;

  @Column({
    default: EAccountStatus[EAccountStatus.WAITING_FOR_EMAIL_VERIFICATION],
  })
  status: string;

  @Column({ default: EVisibility[EVisibility.VISIBLE] })
  visibility: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
