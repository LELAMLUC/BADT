// src/core/database/database.module.ts
import { Module, Global } from "@nestjs/common";
import * as sql from "mssql";

export const DB_MAIN = "DB_MAIN";
export const DB_MAIN_BA = "DB_MAIN_BA";

@Global()
@Module({
  providers: [
    {
      provide: DB_MAIN,
      useFactory: async () => {
        const pool = new sql.ConnectionPool({
          user: process.env.DB_MAIN_USER,
          password: process.env.DB_MAIN_PASS,
          server: process.env.DB_MAIN_HOST,
          database: process.env.DB_MAIN_NAME,
          options: { encrypt: false, trustServerCertificate: true },
        });
        await pool.connect();
        return pool;
      },
    },
    {
      provide: DB_MAIN_BA,
      useFactory: async () => {
        const pool = new sql.ConnectionPool({
          user: process.env.DB_MAIN_BA_USER,
          password: process.env.DB_MAIN_BA_PASS,
          server: process.env.DB_MAIN_BA_HOST,
          database: process.env.DB_MAIN_BA_NAME,
          options: { encrypt: false, trustServerCertificate: true },
        });
        await pool.connect();
        return pool;
      },
    },
  ],
  exports: [DB_MAIN, DB_MAIN_BA],
})
export class DatabaseModule {}
