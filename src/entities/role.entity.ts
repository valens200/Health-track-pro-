import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { InitiatorAudit } from "../audit/initiator.audit";
import { UUID } from "crypto";
@Entity("roles")
export class Role extends InitiatorAudit {
  @PrimaryGeneratedColumn()
  id: UUID;
  @Column({ name: "role_name" })
  roleName: string;
}
