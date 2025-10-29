import { withBasePath } from "~/libs/utils/routeHelper";

import PhieuTheoDoiDieuTri from "~/features/BenhAnDienTu/pages/MauPhieu/PhieuTheoDoiDieuTri";

const basePath = "/badt";

const routesBenhAnDienTu = withBasePath(basePath, {
  PhieuTheoDoiDieuTri: "phieu-theo-doi-dieu-tri",
});

export default routesBenhAnDienTu;
