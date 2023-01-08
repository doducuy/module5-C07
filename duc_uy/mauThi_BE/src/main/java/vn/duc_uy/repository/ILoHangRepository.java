package vn.duc_uy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.duc_uy.model.LoHang;

import java.util.List;


public interface ILoHangRepository  extends JpaRepository<LoHang,Integer> {

    @Query(value = "SELECT * FROM `lo_hang` join san_pham on lo_hang.san_pham=san_pham.id where ten_san_pham like %:ten% and ngay_het_han like %:ngayHetHan%", nativeQuery = true)
    List<LoHang> searchByTenNgayHetHan(
            @Param("ten") String ten,
            @Param("ngayHetHan") String ngayHetHan);

}
