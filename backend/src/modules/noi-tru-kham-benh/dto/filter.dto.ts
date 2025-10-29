import { ApiProperty } from "@nestjs/swagger";

export class KhamBenhByNgayDto {
  @ApiProperty() NgayTao: Date; // SP mượn NgayTao làm ngày lọc
  @ApiProperty() FreePara: string; // PhongBan_ID (string theo SP)
}

export class KhamBenhByPhieuDieuTriDto {
  @ApiProperty() NgayTao: Date;
  @ApiProperty() NgayCapNhat: Date;
  @ApiProperty() FreePara: string; // PhongBan_ID
}
