import { DataSource } from "typeorm"
import "reflect-metadata"
import { User } from "./entities"
require("dotenv").config()

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  synchronize: true,
  migrations: ["src/migrations/*.ts"],
  logging: true,
  entities: [User],
})

export default AppDataSource
