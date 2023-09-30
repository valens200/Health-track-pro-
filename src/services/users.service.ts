import { UUID } from "crypto";
import { getRepositories } from "../repositories/repositories";
import { NotFoundException } from "../exceptions/not-found.exception";
import { User } from "../entities/user.entity";
import { EVisibility } from "../enums/EVisibibility.enum";

let repositories;
let user: any;
let users: User[] = [];
export const initializeRepositories = async () => {
  repositories = await getRepositories();
};
export const getUserById = async (id: UUID) => {
  await initializeRepositories();
  user = await repositories.userRepository.findOne({ where: { id: id } });
  if (!user)
    throw new NotFoundException("The user with the provided id is not found");
  return user;
};

export const getUserByEmail = async (email: string) => {
  await initializeRepositories();
  user = await repositories.userRepository.findOne({ where: { email: email } });
  if (!user)
    throw new NotFoundException("The user with the provided id is not found");
  return user;
};
export const getAllUsers = async () => {
  await initializeRepositories();
  return await repositories.userRepository.find({});
};
export const updateUser = async () => {};
export const deleteUserById = async (id: UUID) => {
  await initializeRepositories();
  user = await getUserById(id);
  user.visibility = EVisibility[EVisibility.HIDDEN];
  return await repositories.userRepository.save(user);
};
export const deleteAllUsers = async () => {
  await initializeRepositories();
  users = await repositories.userRepository.find({});
  users.forEach(async (user: User) => {
    user.visibility = EVisibility[EVisibility.HIDDEN];
    await repositories.userRepository.save(user);
  });
};
