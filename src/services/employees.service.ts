import { UUID } from "crypto";
import { NotFoundException } from "../exceptions/not-found.exception";
import { User } from "../entities/user.entity";
import { EVisibility } from "../enums/EVisibibility.enum";
import { initializeRepositories } from "../utils/helperFunctions";
import { CreateEmployeeDTO } from "../dtos/employees/create-employee.dto";
import { Employee } from "../entities/employee.entity";
import * as utilsService from "../utils/helperFunctions";

let employeeRepo;
let user: any;
let users: User[] = [];
export const initializeRepository = async () => {
  employeeRepo = await initializeRepositories("employee");
};

export const createEmployee = async (employeeEntity: CreateEmployeeDTO) => {
  await initializeRepository();
  let employee = await getEmployeByEmail(employeeEntity.email);
  if (employee)
    throw new NotFoundException("That employee is already registered");
  let employeeToCreate: Employee = new Employee(
    employeeEntity.firstName,
    employeeEntity.lastName,
    employeeEntity.password,
    employeeEntity.email
  );
  employeeToCreate.password = await utilsService.hashString(
    employeeToCreate.password
  );
  return await employeeRepo.save(employeeToCreate);
};
export const getEmployeeById = async (id: UUID) => {
  await initializeRepository();
  user = await employeeRepo.findOne({ where: { id: id } });
  if (!user)
    throw new NotFoundException("The user with the provided id is not found");
  return user;
};

export const getEmployeeByEmail = async (email: string) => {
  await initializeRepository();
  user = await employeeRepo.findOne({ where: { email: email } });
  if (!user)
    throw new NotFoundException("The user with the provided id is not found");
  return user;
};
export const getEmployeByEmail = async (email: string) => {
  await initializeRepository();
  user = await employeeRepo.findOne({ where: { email: email } });
  return user;
};
export const getAllEmployees = async () => {
  await initializeRepository();
  return await employeeRepo.find({});
};
export const UpdateEmployee = async () => {};

export const deleteEmployeeById = async (id: UUID) => {
  await initializeRepository();
  user = await getEmployeeById(id);
  user.visibility = EVisibility[EVisibility.HIDDEN];
  return await employeeRepo.save(user);
};
export const deleteAllEmployees = async () => {
  await initializeRepository();
  users = await employeeRepo.find({});
  users.forEach(async (user: User) => {
    user.visibility = EVisibility[EVisibility.HIDDEN];
    await employeeRepo.save(user);
  });
};
