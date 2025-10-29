import { Module } from "@nestjs/common";
import { DatabaseModule } from "./core/database/database.module";
import { DatabaseHelperModule } from "./core/database/database-helper.module";
import { NoiTruKhamBenhModule } from "./modules/noi-tru-kham-benh/noi-tru-kham-benh.module";

@Module({
  imports: [DatabaseModule, DatabaseHelperModule, NoiTruKhamBenhModule],
})
export class AppModule {}
