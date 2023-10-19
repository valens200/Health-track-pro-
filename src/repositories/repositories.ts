import { connection } from "../database/connection";

export const getRepositories = async () => {
  return await connection
    .then((connection) => {
      return {
        userRepository: connection.getRepository("User"),
        patientRepository: connection.getRepository("Patints"),
      };
    })
    .catch((err) => {
      console.log(err);
    });
};
