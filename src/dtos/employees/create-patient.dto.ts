import { CreateUserDTO } from "../users/create-user.dto";

export class CreatePatientDTO extends CreateUserDTO {
  frequent_sickness: string;
}
