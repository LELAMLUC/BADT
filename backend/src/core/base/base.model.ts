// src/core/base/base.model.ts
import { Injectable, Logger } from "@nestjs/common";
import { StoredProcedureHelper } from "@/core/database/stored-procedure.helper";

/**
 * BaseModel
 * - Giao tiếp trực tiếp với DB (qua StoredProcedureHelper)
 * - Tập trung logic nghiệp vụ tại model con
 * - Log & handle lỗi an toàn khi gọi SP
 */
export type DbTarget = "main" | "main_ba";

@Injectable()
export abstract class BaseModel {
  protected readonly logger = new Logger(this.constructor.name);

  constructor(protected readonly spHelper: StoredProcedureHelper) {}

  /**
   * Gọi stored procedure, trả về recordset (hoặc result nếu SP không trả recordset)
   * @param spName  Tên stored procedure
   * @param params  Tham số truyền vào
   * @param target  DB đích: 'main' | 'main_ba' (mặc định: 'main')
   */
  protected async execSP(
    spName: string,
    params: Record<string, any> = {},
    target: DbTarget = "main",
  ) {
    try {
      this.logger.debug(
        `[EXEC_SP][${target}] ${spName} - ${JSON.stringify(params)}`,
      );
      // StoredProcedureHelper.call() đã trả recordset hoặc result
      return await this.spHelper.call(spName, params, target);
    } catch (error) {
      const e = error as Error;
      this.logger.error(
        `SP Error[${target}]: ${spName} - ${e.message}`,
        e.stack,
      );
      throw error;
    }
  }

  /** Shortcut: gọi SP ở DB chính */
  protected execMain(spName: string, params: Record<string, any> = {}) {
    return this.execSP(spName, params, "main");
  }

  /** Shortcut: gọi SP ở DB BADT (BA) */
  protected execBA(spName: string, params: Record<string, any> = {}) {
    return this.execSP(spName, params, "main_ba");
  }

  /**
   * (Tuỳ chọn) Lấy toàn bộ raw response của mssql: { recordset, recordsets, rowsAffected, ... }
   * Dùng khi cần rowsAffected hoặc nhiều recordsets
   */
  protected async execSPRaw(
    spName: string,
    params: Record<string, any> = {},
    target: DbTarget = "main",
  ) {
    try {
      this.logger.debug(
        `[EXEC_SP_RAW][${target}] ${spName} - ${JSON.stringify(params)}`,
      );
      // Gọi trực tiếp helper, KHÔNG unwrap recordset
      // => dùng phương thức riêng trong helper nếu bạn muốn (ví dụ callRaw),
      // hoặc sửa helper trả nguyên result khi cần.
      // Ở đây minh hoạ gọi trực tiếp call() rồi tự truy cập raw từ helper nếu bạn tách riêng.
      return (await this.spHelper.call(
        spName,
        params,
        target as any,
      )) as unknown;
    } catch (error) {
      const e = error as Error;
      this.logger.error(
        `SP RAW Error[${target}]: ${spName} - ${e.message}`,
        e.stack,
      );
      throw error;
    }
  }
}
