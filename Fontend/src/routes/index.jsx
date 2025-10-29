import config from "~/config";
import benhAnDienTuRoutes from "./modules/benhAnDienTuRoutes";
import TrangChu from "~/features/TrangChu";
const publicRoutes = [];

const privateRoutes = [
  { path: config.routes.trangChu, component: TrangChu, layout: null },
  ...benhAnDienTuRoutes,
];

export { publicRoutes, privateRoutes };
