import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./DataGrid.module.scss";

const cx = classNames.bind(styles);

export interface GridColumn {
  key: string;
  title: string;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface GridRow {
  id: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface DataGridProps {
  title?: string;
  columns: GridColumn[];
  data: GridRow[];
  onRowClick?: (row: GridRow) => void;
  width: string;
  height: string;
}

const DataGrid: React.FC<DataGridProps> = ({
  title,
  columns,
  data,
  onRowClick,
  width = "250px",
  height = "500px",
}) => {
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(
    new Set()
  );
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleSelectAll = () => {
    if (selectedIds.size === data.length) setSelectedIds(new Set());
    else setSelectedIds(new Set(data.map((d) => d.id)));
  };

  const toggleSelect = (id: string | number) => {
    const newSet = new Set(selectedIds);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelectedIds(newSet);
  };

  const handleSort = (key: string) => {
    if (sortKey === key) setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div
      className={cx("gridWrapper")}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {title && <div className={cx("header")}>{title}</div>}

      <div className={cx("tableWrapper")}>
        <table className={cx("table")}>
          <thead>
            <tr>
              <th style={{ width: "40px" }}>
                <input
                  type="checkbox"
                  checked={selectedIds.size === data.length && data.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width, textAlign: col.align || "left" }}
                  onClick={() => handleSort(col.key)}
                >
                  {col.title}
                  {sortKey === col.key && (
                    <span className={cx("sortIcon")}>
                      {sortOrder === "asc" ? " ▲" : " ▼"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedData.map((row) => (
              <tr
                key={row.id}
                className={cx({ selectedRow: selectedIds.has(row.id) })}
                onClick={() => onRowClick?.(row)}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.has(row.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleSelect(row.id);
                    }}
                  />
                </td>
                {columns.map((col) => (
                  <td key={col.key} style={{ textAlign: col.align || "left" }}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
