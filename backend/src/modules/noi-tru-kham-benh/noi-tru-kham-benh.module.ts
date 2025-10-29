import { Module } from "@nestjs/common";
import { NoiTruKhamBenhController } from "./noi-tru-kham-benh.controller";
import { NoiTruKhamBenhService } from "./noi-tru-kham-benh.service";
import { NoiTruKhamBenhModel } from "./noi-tru-kham-benh.model";
import { StoredProcedureHelper } from "@/core/database/stored-procedure.helper";
@Module({
  controllers: [NoiTruKhamBenhController],
  providers: [
    NoiTruKhamBenhService,
    NoiTruKhamBenhModel,
    StoredProcedureHelper,
  ],
  exports: [NoiTruKhamBenhService],
})
export class NoiTruKhamBenhModule {}
