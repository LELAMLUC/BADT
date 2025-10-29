import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam, ApiBody } from "@nestjs/swagger";
import { NoiTruKhamBenhService } from "./noi-tru-kham-benh.service";
import { CreateNoiTruKhamBenhDto } from "./dto/create-noi-tru-kham-benh.dto";
import { UpdateNoiTruKhamBenhDto } from "./dto/update-noi-tru-kham-benh.dto";
import { KhamBenhByNgayDto, KhamBenhByPhieuDieuTriDto } from "./dto/filter.dto";

@ApiTags("sp_NOITRU_KHAMBENH_MAIN")
@Controller("noi-tru-kham-benh")
export class NoiTruKhamBenhController {
  constructor(private readonly service: NoiTruKhamBenhService) {}

  @Get()
  @ApiOperation({ summary: "GetListData" })
  list() {
    return this.service.list();
  }

  @Get(":id")
  @ApiOperation({ summary: "GetData_ByKey" })
  @ApiParam({ name: "id", type: Number })
  detail(@Param("id") id: string) {
    return this.service.detail(Number(id));
  }

  @Post()
  @ApiOperation({ summary: "AddNew" })
  @ApiBody({ type: CreateNoiTruKhamBenhDto })
  create(@Body() dto: CreateNoiTruKhamBenhDto) {
    return this.service.create(dto);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update" })
  @ApiParam({ name: "id", type: Number })
  @ApiBody({ type: UpdateNoiTruKhamBenhDto })
  update(@Param("id") id: string, @Body() dto: UpdateNoiTruKhamBenhDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete" })
  @ApiParam({ name: "id", type: Number })
  remove(@Param("id") id: string) {
    return this.service.remove(Number(id));
  }

  // --- Helpers ---
  @Get("Get_DefaultValue/:benhAnId")
  @ApiOperation({ summary: "Get_DefaultValue" })
  @ApiParam({ name: "benhAnId", type: Number })
  getDefaultValue(@Param("benhAnId") benhAnId: string) {
    return this.service.getDefaultValue(Number(benhAnId));
  }

  @Get("Get_ByBenhAnId/:benhAnId")
  @ApiOperation({ summary: "GetKhamBenh_By_BenhAn_Id" })
  @ApiParam({ name: "benhAnId", type: Number })
  getByBenhAn(@Param("benhAnId") benhAnId: string) {
    return this.service.getByBenhAnId(Number(benhAnId));
  }

  @Get("Get_Last_ByBenhAnId/:benhAnId")
  @ApiOperation({ summary: "GetLast_NoiTru_KhamBenh_By_BenhAn_Id" })
  @ApiParam({ name: "benhAnId", type: Number })
  getLastByBenhAn(@Param("benhAnId") benhAnId: string) {
    return this.service.getLastByBenhAnId(Number(benhAnId));
  }

  @Get("Get_GanNhat_ByBenhAnId/:benhAnId")
  @ApiOperation({ summary: "GetKhamBenh_GanNhat_By_BenhAn_Id" })
  @ApiParam({ name: "benhAnId", type: Number })
  getGanNhat(@Param("benhAnId") benhAnId: string) {
    return this.service.getGanNhatByBenhAnId(Number(benhAnId));
  }

  @Post("Get_ByNgay")
  @ApiOperation({ summary: "GetKhamBenhByNgay" })
  @ApiBody({ type: KhamBenhByNgayDto })
  getByNgay(@Body() dto: KhamBenhByNgayDto) {
    return this.service.getKhamBenhByNgay(dto.NgayTao, dto.FreePara);
  }

  @Post("Get_ByPhieuDieuTri")
  @ApiOperation({ summary: "GetKhamBenhByPhieuDieuTri" })
  @ApiBody({ type: KhamBenhByPhieuDieuTriDto })
  getByPDT(@Body() dto: KhamBenhByPhieuDieuTriDto) {
    return this.service.getKhamBenhByPhieuDieuTri(
      dto.NgayTao,
      dto.NgayCapNhat,
      dto.FreePara,
    );
  }

  @Put("CapNhatInLai/:id")
  @ApiOperation({ summary: "CapNhatInLai" })
  @ApiParam({ name: "id", type: Number })
  capNhatInLai(
    @Param("id") id: string,
    @Body() body: { InLai: number; InLai_User_Id: number },
  ) {
    return this.service.capNhatInLai(
      Number(id),
      body.InLai,
      body.InLai_User_Id,
    );
  }

  @Get("Get_ToaThuoc_ByLuuTru/:luuTruId")
  @ApiOperation({ summary: "GetAllToaThuoc_ByLuuTru_Id" })
  @ApiParam({ name: "luuTruId", type: Number })
  toaThuoc(@Param("luuTruId") luuTruId: string) {
    return this.service.getToaThuocByLuuTru(Number(luuTruId));
  }

  @Get("Get_ToaThuocVTYT_ByLuuTru/:luuTruId")
  @ApiOperation({ summary: "GetAllToaThuoc_VTYT_ByLuuTru_Id" })
  @ApiParam({ name: "luuTruId", type: Number })
  toaThuocVTYT(@Param("luuTruId") luuTruId: string) {
    return this.service.getToaThuocVTYTByLuuTru(Number(luuTruId));
  }

  @Put("Update_ChungTuXuat/:id")
  @ApiOperation({ summary: "UpDateChungTuXuat" })
  @ApiParam({ name: "id", type: Number })
  updateChungTu(@Param("id") id: string, @Body() body: { ChungTu_Id: number }) {
    return this.service.updateChungTuXuat(Number(id), body.ChungTu_Id);
  }

  @Delete("Delete_ChungTuSuDung/:id")
  @ApiOperation({ summary: "DeleteChungTuXuatSuDung_ByKhamBenh_Id" })
  @ApiParam({ name: "id", type: Number })
  deleteChungTu(@Param("id") id: string) {
    return this.service.deleteChungTuSuDung(Number(id));
  }
}
