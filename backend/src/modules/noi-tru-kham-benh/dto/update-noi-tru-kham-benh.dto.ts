import { PartialType } from "@nestjs/swagger";
import { CreateNoiTruKhamBenhDto } from "./create-noi-tru-kham-benh.dto";

export class UpdateNoiTruKhamBenhDto extends PartialType(
  CreateNoiTruKhamBenhDto,
) {}
