import { Logger } from "@nestjs/common";

/* - Chứa logic xử lý chung cho tất cả service
 * - Format dữ liệu, xử lý lỗi, và ghi log
 * - Giúp code ngắn gọn và đồng nhất
 */
export abstract class BaseService {
  protected readonly logger: Logger;

  constructor(context?: string) {
    this.logger = new Logger(context || "BaseService");
  }

  protected formatResponse(data: any, message = "OK") {
    return {
      success: true,
      message,
      data,
    };
  }

  protected handleError(error: any, customMessage?: string) {
    const msg = customMessage || error?.message || "Internal Server Error";
    this.logger.error(msg, error?.stack);
    throw new Error(msg);
  }
}
