import { ApiProperty } from "@nestjs/swagger";

export class CreateNoiTruKhamBenhDto {
  @ApiProperty() BenhAn_Id: number;
  @ApiProperty() LuuTru_Id: number;
  @ApiProperty({ required: false }) LanKham?: number;
  @ApiProperty({ required: false }) NgayKham?: Date;
  @ApiProperty({ required: false }) ThoiGianKham?: Date;
  @ApiProperty({ required: false }) BasSiKham_Id?: number;
  @ApiProperty({ required: false }) DieuDuong_Id?: number;
  @ApiProperty({ required: false }) DinhBenh?: string;
  @ApiProperty({ required: false }) DienBien?: string;
  @ApiProperty({ required: false }) LoiDan?: string;
  @ApiProperty({ required: false }) CheDoAnUong_Id?: number;
  @ApiProperty({ required: false }) CheDoChamSoc_Id?: number;
  @ApiProperty({ required: false }) KhoDuoc_Id?: number;
  @ApiProperty({ required: false }) NgayTao?: Date;
  @ApiProperty({ required: false }) NguoiTao_Id?: number;
  @ApiProperty({ required: false }) NgayCapNhat?: Date;
  @ApiProperty({ required: false }) NguoiCapNhat_Id?: number;
  @ApiProperty({ required: false }) DoiTuong_Id?: number;
  @ApiProperty({ required: false }) CapHoLy_Id?: number;
  @ApiProperty({ required: false }) LoaiToaThuoc?: string; // 'MN' | 'BV'
  @ApiProperty({ required: false, default: 0 }) RaVien?: number; // bit
  @ApiProperty({ required: false, default: 0 }) KhamNgoaiTru?: number; // bit
  @ApiProperty({ required: false, default: 0 }) ThuocDacTri?: number; // bit
  @ApiProperty({ required: false }) NgayTaiKham?: Date;
  @ApiProperty({ required: false }) SoNgayHenTaiKham?: number;
  @ApiProperty({ required: false }) BenhAn_PhatDo_NgayDieuTri_Id?: number;
  @ApiProperty({ required: false }) InLai?: number;
  @ApiProperty({ required: false }) InLai_User_Id?: number;
  @ApiProperty({ required: false }) NoiNhanThuoc_ID?: number;
  @ApiProperty({ required: false }) ChungTuPhatThuoc_Id?: number;

  // EMR fields
  @ApiProperty({ required: false }) KetQuaCLS?: string;
  @ApiProperty({ required: false }) Mach?: number;
  @ApiProperty({ required: false }) HuyetApThap?: number;
  @ApiProperty({ required: false }) HuyetApCao?: number;
  @ApiProperty({ required: false }) CanNang?: number;
  @ApiProperty({ required: false }) ChieuCao?: number;
  @ApiProperty({ required: false }) SPO2?: number;
  @ApiProperty({ required: false }) NhietDo?: number;
  @ApiProperty({ required: false }) NhipTho?: number;
  @ApiProperty({ required: false }) VongNguc?: number;
  @ApiProperty({ required: false }) VongBung?: number;
  @ApiProperty({ required: false }) BMI?: number;
  @ApiProperty({ required: false }) KeHoachDieuTri?: string;
  @ApiProperty({ required: false }) KhamBenh?: string;
  @ApiProperty({ required: false }) GhiChu?: string;
  @ApiProperty({ required: false }) GhiChu_Khac?: string;
  @ApiProperty({ required: false }) BenhAnPhauThuat_Id?: number;
  @ApiProperty({ required: false }) ChanDoanPB?: string;
  @ApiProperty({ required: false }) YLenhThoOxi?: string;
}
