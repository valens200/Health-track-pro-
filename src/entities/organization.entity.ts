import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { InitiatorAudit } from "../audit/initiator.audit";
import { UUID } from "crypto";

@Entity("organization")
export class Organization extends InitiatorAudit {
  @PrimaryGeneratedColumn()
  id: UUID;
}
