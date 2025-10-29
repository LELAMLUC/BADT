import { Injectable } from "@nestjs/common";
import { BaseModel, DbTarget } from "@/core/base/base.model";

@Injectable()
export class NoiTruKhamBenhModel extends BaseModel {
  // CRUD cơ bản
  getList(target: DbTarget = "main") {
    return this.execSP("sp_NOITRU_KHAMBENH", { Action: "GetListData" }, target);
  }

  getById(KhamBenh_Id: number, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "GetData_ByKey", KhamBenh_Id },
      target,
    );
  }

  addNew(body: Record<string, any>, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "AddNew", ...body },
      target,
    );
  }

  update(id: number, body: Record<string, any>, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "Update", KhamBenh_Id: id, ...body },
      target,
    );
  }

  remove(id: number, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "Delete", KhamBenh_Id: id },
      target,
    );
  }

  // Các action đặc thù trong SP
  get_LanKhamCuoi(KhamBenh_Id: number, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "Get_LanKhamCuoi", KhamBenh_Id },
      target,
    );
  }

  getKhamBenhByNgay(
    NgayTao: Date,
    FreePara: string,
    target: DbTarget = "main",
  ) {
    // SP “mượn” NgayTao làm ngày lọc, FreePara là PhongBan_ID
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "GetKhamBenhByNgay", NgayTao, FreePara: String(FreePara) },
      target,
    );
  }

  getKhamBenhByPhieuDieuTri(
    NgayTao: Date,
    NgayCapNhat: Date,
    FreePara: string,
    target: DbTarget = "main",
  ) {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      {
        Action: "GetKhamBenhByPhieuDieuTri",
        NgayTao,
        NgayCapNhat,
        FreePara: String(FreePara),
      },
      target,
    );
  }

  getDefaultValue(BenhAn_Id: number, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "Get_DefaultValue", BenhAn_Id },
      target,
    );
  }

  getByBenhAnId(BenhAn_Id: number, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "GetKhamBenh_By_BenhAn_Id", BenhAn_Id },
      target,
    );
  }

  getLastByBenhAnId(BenhAn_Id: number, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "GetLast_NoiTru_KhamBenh_By_BenhAn_Id", BenhAn_Id },
      target,
    );
  }

  getGanNhatByBenhAnId(BenhAn_Id: number, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "GetKhamBenh_GanNhat_By_BenhAn_Id", BenhAn_Id },
      target,
    );
  }

  capNhatInLai(
    KhamBenh_Id: number,
    InLai: number,
    InLai_User_Id: number,
    target: DbTarget = "main",
  ) {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "CapNhatInLai", KhamBenh_Id, InLai, InLai_User_Id },
      target,
    );
  }

  // Toa thuốc/VTYT theo LuuTru_Id
  getAllToaThuoc_ByLuuTru_Id(LuuTru_Id: number, target: DbTarget = "main") {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "GetAllToaThuoc_ByLuuTru_Id", LuuTru_Id },
      target,
    );
  }

  getAllToaThuoc_VTYT_ByLuuTru_Id(
    LuuTru_Id: number,
    target: DbTarget = "main",
  ) {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "GetAllToaThuoc_VTYT_ByLuuTru_Id", LuuTru_Id },
      target,
    );
  }

  updateChungTuXuat(
    KhamBenh_Id: number,
    ChungTuPhatThuoc_Id: number,
    target: DbTarget = "main",
  ) {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "UpDateChungTuXuat", KhamBenh_Id, ChungTuPhatThuoc_Id },
      target,
    );
  }

  deleteChungTuXuatSuDung_ByKhamBenh_Id(
    KhamBenh_Id: number,
    target: DbTarget = "main",
  ) {
    return this.execSP(
      "sp_NOITRU_KHAMBENH",
      { Action: "DeleteChungTuXuatSuDung_ByKhamBenh_Id", KhamBenh_Id },
      target,
    );
  }
}
