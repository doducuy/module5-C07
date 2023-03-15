import {CongcudungcuNhanvien} from "./congcudungcu-nhanvien";

export interface CongCuDungCu {
  id?: number;
  maCongCuDungCu?: string;
  donVi?: string;
  tenCongCuDungCu?: string;
  hangSanXuat?: string;
  soLuong?: number;
  // nhanVienCongCu?: CongcudungcuNhanvien;
}
