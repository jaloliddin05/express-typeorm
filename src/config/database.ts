import { DataSource } from "typeorm";

const TypeOrmDataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  name: "default",
  entities: ["src/**/*.entity.*"],
  logging: true,
  synchronize: true,
});

export default TypeOrmDataSource;
