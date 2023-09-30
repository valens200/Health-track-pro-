import { User } from "../entities/user.entity";
import { getRepositories } from "../repositories/repositories";

export const createUser = async () => {
  const repositories: any = await getRepositories();
  const user: any = new User("valebs", "valens");
  const createdUser = await repositories.userRepository.save(user);
  console.log(createdUser);
};
