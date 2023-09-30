import { Exclusion } from "typeorm";
import { TimeStampAudit } from "./timestamp.audit";
import { Exclude } from "class-transformer";
@Exclude()
export class InitiatorAudit extends TimeStampAudit {
  constructor() {
    super();
  }
  @Exclude()
  createdBy: string;
  @Exclude()
  updatedBy: string;
}
