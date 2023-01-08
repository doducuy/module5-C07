package vn.duc_uy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.duc_uy.model.LoHang;
import vn.duc_uy.repository.ILoHangRepository;

import java.util.List;

@Service
public class LoHangService implements ILoHangService {
    @Autowired
    private ILoHangRepository loHangRepository;

    @Override
    public List<LoHang> findAll() {
        return loHangRepository.findAll();
    }

    @Override
    public void create(LoHang loHang) {
    loHangRepository.save(loHang);
    }


    @Override
    public LoHang findById(Integer id) {
        return loHangRepository.findById(id).get();
    }

    @Override
    public void edit(LoHang loHang) {
        loHangRepository.save(loHang);
    }

    @Override
    public void remove(Integer id) {
       loHangRepository.deleteById(id);
    }

    @Override
    public List<LoHang> searchLoHang(String ten, String ngayHetHan) {
        return loHangRepository.searchByTenNgayHetHan(ten,ngayHetHan);
    }
}
