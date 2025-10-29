import classNames from "classnames/bind";

import TextBox from "~/features/shared/components/TextBox";
import styles from "./PhieuTheoDoiDieuTri.module.scss";
import DataGrid from "~/features/shared/components/DataGrid";
import DateTimeInput from "~/features/shared/components/DateTimeInput";
import Checkbox from "~/features/shared/components/Checkbox";

const cx = classNames.bind(styles);
function PhieuTheoDoiDieuTri() {
  const columns = [
    { key: "index", title: "#" },
    { key: "time", title: "Thời gian khám", width: "150px" },
  ];
  const data = [
    { id: 1, index: 1, time: "28/10/2025 08:11:27" },
    { id: 2, index: 2, time: "28/10/2025 08:11:01" },
    { id: 3, index: 3, time: "27/10/2025 08:00:54" },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <TextBox backgroundColor="#ffedbb" showArrow label="Số bệnh án" />
        <p>Mã Y tế................</p>
        <p>Tên ...................</p>
      </div>
      <div className={cx("content")}>
        <div className={cx("grid-master")}>
          <DataGrid
            title="Thời gian khám"
            columns={columns}
            data={data}
            width="250px"
          />
        </div>
        <div className={cx("form")}>
          <div className={cx("form-row")}>
            <div className={cx("left")}>
              <DateTimeInput />
              <TextBox label="Chẩn đoán" width="350px" height="40px" />
              <TextBox
                label="Chẩn đoán phân biệt"
                width="350px"
                height="80px"
              />
              <TextBox label="S (Hỏi bệnh)" width="350px" height="80px" />
              <TextBox label="O.1 (Khám bệnh)" width="350px" height="80px" />
              <TextBox
                label="O.3 (kết quả xét nghiệm, CLS)"
                width="350px"
                height="80px"
              />
            </div>

            <div className={cx("mid")}>
              {/* <TextBox label="Chẩn đoán" width="350px" height="40px" /> */}
            </div>
          </div>
          <div className={cx("row-1")}>
            <TextBox showArrow label="Bác sĩ" />
            <TextBox showArrow label="Điều dưỡng" />
          </div>
          <div className={cx("row-1")}>
            <Checkbox label="Ra viện" />
            <Checkbox label="Khám ngoại trú" />
            <Checkbox label="Thuốc đặc trị" />
            <Checkbox label="Tái khám" variant="important" />
            <TextBox width="50px" />
            <DateTimeInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhieuTheoDoiDieuTri;
