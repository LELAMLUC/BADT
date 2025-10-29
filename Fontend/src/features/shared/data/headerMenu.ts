export interface MenuItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export const headerMenu: MenuItem[] = [
  { label: "Tiếp Nhận", path: "/tiep-nhan" },
  { label: "Khám Bệnh", path: "/kham-benh" },
  { label: "Cận Lâm Sàng", path: "/can-lam-sang" },
  { label: "QLBA Nội Trú - Ngoại Trú", path: "/qlba" },
  { label: "Viện Phí", path: "/vien-phi" },
  { label: "Dược Phẩm", path: "/duoc-pham" },
  { label: "Phẫu thuật/Thủ thuật", path: "/phau-thuat" },
  { label: "Quản lý bệnh án", path: "/quan-ly-benh-an" },
  { label: "Báo Cáo", path: "/bao-cao" },
  { label: "Danh Mục", path: "/danh-muc" },
  { label: "Văn phòng phẩm", path: "/van-phong-pham" },
  { label: "Lịch Làm Việc - Lịch Hẹn", path: "/lich-hen" },
  { label: "Dinh Dưỡng", path: "/dinh-duong" },
  { label: "Hệ Thống", path: "/he-thong" },
  { label: "Quản lý Giấy tờ điện tử", path: "/giay-to" },
];
