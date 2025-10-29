import { Inject, Injectable, Logger } from "@nestjs/common";
import * as sql from "mssql";
import { DB_MAIN, DB_MAIN_BA } from "./database.module";

/**
 * StoredProcedureHelper
 * ------------------------
 * Hỗ trợ gọi Stored Procedure SQL Server
 * - Cho phép chọn DB target (main / main_ba)
 * - Tự động truyền params động
 * - Ghi log đầy đủ
 */
@Injectable()
export class StoredProcedureHelper {
  private readonly logger = new Logger(StoredProcedureHelper.name);

  constructor(
    @Inject(DB_MAIN) private readonly poolMain: sql.ConnectionPool,
    @Inject(DB_MAIN_BA) private readonly poolMainBA: sql.ConnectionPool,
  ) {}

  /**
   * Gọi Stored Procedure với tham số động
   * @param spName  - Tên stored procedure
   * @param params  - Object key-value tham số
   * @param target  - 'main' | 'main_ba' (mặc định: main)
   */
  async call(
    spName: string,
    params: Record<string, any> = {},
    target: "main" | "main_ba" = "main",
  ) {
    const pool = target === "main_ba" ? this.poolMainBA : this.poolMain;
    const request = pool.request();

    // Gán các tham số
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) request.input(key, value);
    }

    try {
      this.logger.debug(`[${target}] EXEC ${spName} ${JSON.stringify(params)}`);
      const result = await request.execute(spName);
      return result?.recordset ?? result;
    } catch (error: any) {
      this.logger.error(
        `❌ SP Error (${target}): ${spName} - ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }

  /**
   * Hàm tiện ích - gọi nhanh cho DB chính
   */
  callMain(spName: string, params?: Record<string, any>) {
    return this.call(spName, params, "main");
  }

  /**
   * Hàm tiện ích - gọi nhanh cho DB BADT
   */
  callBA(spName: string, params?: Record<string, any>) {
    return this.call(spName, params, "main_ba");
  }
}
