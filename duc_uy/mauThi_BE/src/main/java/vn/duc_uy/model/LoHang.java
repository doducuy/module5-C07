package vn.duc_uy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class LoHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String maLoHang;
    private Integer soLuong;
    private String ngayNhapHang;
    private String ngaySanXuat;
    private String ngayHetHan;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "san_pham", referencedColumnName = "id")
    private SanPham sanPham;

    public LoHang() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMaLoHang() {
        return maLoHang;
    }

    public void setMaLoHang(String maLoHang) {
        this.maLoHang = maLoHang;
    }

    public Integer getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public String getNgayNhapHang() {
        return ngayNhapHang;
    }

    public void setNgayNhapHang(String ngayNhapHang) {
        this.ngayNhapHang = ngayNhapHang;
    }

    public String getNgaySanXuat() {
        return ngaySanXuat;
    }

    public void setNgaySanXuat(String ngaySanXuat) {
        this.ngaySanXuat = ngaySanXuat;
    }

    public String getNgayHetHan() {
        return ngayHetHan;
    }

    public void setNgayHetHan(String ngayHetHan) {
        this.ngayHetHan = ngayHetHan;
    }

    public SanPham getSanPham() {
        return sanPham;
    }

    public void setSanPham(SanPham sanPham) {
        this.sanPham = sanPham;
    }
}
