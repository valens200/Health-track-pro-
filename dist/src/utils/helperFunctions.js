"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironmentVariables = void 0;
const getEnvironmentVariables = () => {
    return {
        type: "postgres",
        host: `${process.env.DB_HOST}`,
        port: 5432,
        username: `${process.env.DB_USERNAME}`,
        password: `${process.env.DB_PASSWORD}`,
        database: `${process.env.DB_NAME}`,
        synchronize: true,
        logging: true,
        entities: ["../src/entities/**/*.ts"],
        migrations: ["../src/migrations/**/*.ts"],
        subscribers: ["../src/subscribers/**/*.ts"],
        cli: {
            entitiesDir: "../src/entities",
            migrationsDir: "../src/migrations",
            subscribersDir: "../src/subscribers",
        },
    };
};
exports.getEnvironmentVariables = getEnvironmentVariables;
//# sourceMappingURL=helperFunctions.js.map