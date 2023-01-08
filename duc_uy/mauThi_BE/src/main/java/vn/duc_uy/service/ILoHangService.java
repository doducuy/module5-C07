package vn.duc_uy.service;

import vn.duc_uy.model.LoHang;

import java.util.List;

public interface ILoHangService {
    List<LoHang> findAll();

    void create(LoHang loHang);


    LoHang findById(Integer id);

    void edit(LoHang loHang);

    void remove(Integer id);

    List<LoHang> searchLoHang(String ten, String ngayHetHan);
}
