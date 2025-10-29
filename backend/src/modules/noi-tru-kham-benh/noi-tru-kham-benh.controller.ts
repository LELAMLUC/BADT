// src/modules/noi-tru-kham-benh/noi-tru-kham-benh.controller.ts
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreateNoiTruKhamBenhDto } from "./dto/create-noi-tru-kham-benh.dto";
import { UpdateNoiTruKhamBenhDto } from "./dto/update-noi-tru-kham-benh.dto";
import { KhamBenhByNgayDto, KhamBenhByPhieuDieuTriDto } from "./dto/filter.dto";
import { NoiTruKhamBenhService } from "./noi-tru-kham-benh.service";

@ApiTags("sp_NOITRU_KHAMBENH DB_Main")
// @ApiBearerAuth()
@Controller("noi-tru-kham-benh")
export class NoiTruKhamBenhController {
  constructor(private readonly service: NoiTruKhamBenhService) {}

  @Get()
  list() {
    return this.service.list();
  }

  @Get(":id")
  detail(@Param("id") id: string) {
    return this.service.detail(Number(id));
  }

  @Post()
  create(@Body() dto: CreateNoiTruKhamBenhDto) {
    return this.service.create(dto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: UpdateNoiTruKhamBenhDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.service.remove(Number(id));
  }

  @Get("Get_DefaultValue/:benhAnId")
  getDefaultValue(@Param("benhAnId") benhAnId: string) {
    return this.service.getDefaultValue(Number(benhAnId));
  }

  @Get("Get_ByBenhAnId/:benhAnId")
  getByBenhAn(@Param("benhAnId") benhAnId: string) {
    return this.service.getByBenhAnId(Number(benhAnId));
  }

  @Get("Get_Last_ByBenhAnId/:benhAnId")
  getLastByBenhAn(@Param("benhAnId") benhAnId: string) {
    return this.service.getLastByBenhAnId(Number(benhAnId));
  }

  @Get("Get_GanNhat_ByBenhAnId/:benhAnId")
  getGanNhat(@Param("benhAnId") benhAnId: string) {
    return this.service.getGanNhatByBenhAnId(Number(benhAnId));
  }

  @Post("Get_ByNgay")
  getByNgay(@Body() dto: KhamBenhByNgayDto) {
    return this.service.getKhamBenhByNgay(dto.NgayTao, dto.FreePara);
  }

  @Post("Get_ByPhieuDieuTri")
  getByPDT(@Body() dto: KhamBenhByPhieuDieuTriDto) {
    return this.service.getKhamBenhByPhieuDieuTri(
      dto.NgayTao,
      dto.NgayCapNhat,
      dto.FreePara,
    );
  }

  @Put("CapNhatInLai/:id")
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
  toaThuoc(@Param("luuTruId") luuTruId: string) {
    return this.service.getToaThuocByLuuTru(Number(luuTruId));
  }

  @Get("Get_ToaThuocVTYT_ByLuuTru/:luuTruId")
  toaThuocVTYT(@Param("luuTruId") luuTruId: string) {
    return this.service.getToaThuocVTYTByLuuTru(Number(luuTruId));
  }

  @Put("Update_ChungTuXuat/:id")
  updateChungTu(@Param("id") id: string, @Body() body: { ChungTu_Id: number }) {
    return this.service.updateChungTuXuat(Number(id), body.ChungTu_Id);
  }

  @Delete("Delete_ChungTuSuDung/:id")
  deleteChungTu(@Param("id") id: string) {
    return this.service.deleteChungTuSuDung(Number(id));
  }
}
