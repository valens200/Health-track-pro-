import { connection } from "../database/connection";

export const getRepositories = async () => {
  let userRepository;
  return await connection
    .then((connection) => {
      return { userRepository: connection.getRepository("User") };
    })
    .catch((err) => {
      console.log(err);
    });
};
