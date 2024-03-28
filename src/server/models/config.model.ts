import { Sequelize } from "sequelize";
import { config } from "dotenv-flow";
import { AppConfig } from "../config";

config({ node_env: AppConfig.NODE_ENV });

export const sequelize = new Sequelize(
    process.env.DATABASE_NAME as string,
    process.env.DATABASE_USER as string,
    process.env.DATABASE_PASSWORD as string,
    {
        dialect: process.env.DATABASE_DIALECT as 'mysql' | 'mariadb' | 'postgres' | 'mssql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT as string) || 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    }
);
