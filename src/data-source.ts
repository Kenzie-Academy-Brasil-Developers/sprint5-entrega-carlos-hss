import * as TypeORM from "typeorm";
import "reflect-metadata";
require("dotenv").config();

export const AppDataSource = new TypeORM.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
});