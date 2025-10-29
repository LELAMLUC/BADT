import config from "~/config";
import PhieuTheoDoiDieuTri from "~/features/BenhAnDienTu/pages/MauPhieu/PhieuTheoDoiDieuTri";

const benhAnDienTuRoutes = [
  {
    path: config.routesBenhAnDienTu.PhieuTheoDoiDieuTri,
    component: PhieuTheoDoiDieuTri,
    layout: null,
  },
];

export default benhAnDienTuRoutes;
