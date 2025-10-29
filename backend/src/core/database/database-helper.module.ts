import { Module, Global } from "@nestjs/common";
import { StoredProcedureHelper } from "./stored-procedure.helper";
import { DatabaseModule } from "./database.module";

/**
 * Module dùng chung toàn hệ thống để gọi Stored Procedure
 */
@Global()
@Module({
  imports: [DatabaseModule],
  providers: [StoredProcedureHelper],
  exports: [StoredProcedureHelper],
})
export class DatabaseHelperModule {}
