import { connection } from "../database/connection";

export const getRepositories = async () => {
  return await connection
    .then((connection) => {
      return {
        userRepository: connection.getRepository("User"),
        employeeRepository: connection.getRepository("Employee"),
        companyRepository: connection.getRepository("Company"),
      };
    })
    .catch((err) => {
      console.log(err);
    });
};
