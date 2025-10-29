import { Injectable } from "@nestjs/common";
import { NoiTruKhamBenhModel } from "./noi-tru-kham-benh.model";
import { CreateNoiTruKhamBenhDto } from "./dto/create-noi-tru-kham-benh.dto";
import { UpdateNoiTruKhamBenhDto } from "./dto/update-noi-tru-kham-benh.dto";

@Injectable()
export class NoiTruKhamBenhService {
  constructor(private readonly model: NoiTruKhamBenhModel) {}

  list() {
    return this.model.getList();
  }

  detail(id: number) {
    return this.model.getById(id);
  }

  create(dto: CreateNoiTruKhamBenhDto) {
    return this.model.addNew(dto);
  }

  update(id: number, dto: UpdateNoiTruKhamBenhDto) {
    return this.model.update(id, dto);
  }

  remove(id: number) {
    return this.model.remove(id);
  }

  getDefaultValue(benhAnId: number) {
    return this.model.getDefaultValue(benhAnId);
  }

  getByBenhAnId(benhAnId: number) {
    return this.model.getByBenhAnId(benhAnId);
  }

  getLastByBenhAnId(benhAnId: number) {
    return this.model.getLastByBenhAnId(benhAnId);
  }

  getGanNhatByBenhAnId(benhAnId: number) {
    return this.model.getGanNhatByBenhAnId(benhAnId);
  }

  getKhamBenhByNgay(ngay: Date, phongBanId: string) {
    return this.model.getKhamBenhByNgay(ngay, phongBanId);
  }

  getKhamBenhByPhieuDieuTri(ngayFrom: Date, ngayTo: Date, phongBanId: string) {
    return this.model.getKhamBenhByPhieuDieuTri(ngayFrom, ngayTo, phongBanId);
  }

  capNhatInLai(id: number, InLai: number, InLai_User_Id: number) {
    return this.model.capNhatInLai(id, InLai, InLai_User_Id);
  }

  getToaThuocByLuuTru(luuTruId: number) {
    return this.model.getAllToaThuoc_ByLuuTru_Id(luuTruId);
  }

  getToaThuocVTYTByLuuTru(luuTruId: number) {
    return this.model.getAllToaThuoc_VTYT_ByLuuTru_Id(luuTruId);
  }

  updateChungTuXuat(id: number, chungTuId: number) {
    return this.model.updateChungTuXuat(id, chungTuId);
  }

  deleteChungTuSuDung(id: number) {
    return this.model.deleteChungTuXuatSuDung_ByKhamBenh_Id(id);
  }
}
