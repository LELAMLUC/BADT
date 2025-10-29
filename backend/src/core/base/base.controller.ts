import { Logger } from "@nestjs/common";

/**
 * - Chuẩn hóa response trả về (success / fail)
 * - Có logger tích hợp sẵn theo tên class
 * - Giúp các controller con không cần lặp lại format JSON
 */
export abstract class BaseController {
  protected readonly logger: Logger;

  constructor(context?: string) {
    this.logger = new Logger(context || "BaseController");
  }

  protected success(data: any, message = "Thành công") {
    return {
      success: true,
      message,
      data,
    };
  }

  protected fail(error: any, message = "Thất bại") {
    const msg = error?.message || message;
    this.logger.error(msg, error?.stack);
    return {
      success: false,
      message: msg,
    };
  }
}
