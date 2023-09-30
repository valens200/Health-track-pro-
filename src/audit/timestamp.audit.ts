import { CreateDateColumn, serialize } from "typeorm";

export class TimeStampAudit {
  constructor() {}
  @CreateDateColumn({ name: "created_at", default: new Date(Date.now()) })
  createdAt: Date;

  @CreateDateColumn({ name: "updated_at", default: new Date(Date.now()) })
  updatedAt: Date;
}
