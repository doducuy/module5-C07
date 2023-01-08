package vn.duc_uy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.duc_uy.model.LoHang;
import vn.duc_uy.service.LoHangService;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/lohang")
public class HomeRestController {
    @Autowired
    private LoHangService loHangService;
    @GetMapping("")
    public ResponseEntity<List<LoHang>> getListLoHang() {
        return new ResponseEntity<>(loHangService.findAll(), HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<LoHang> createLoHang(LoHang loHang) {
        loHangService.create(loHang);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoHang> getLoHangById(@PathVariable Integer id) {
        return new ResponseEntity<>(loHangService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoHang(@PathVariable Integer id) {
        loHangService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<Void> editLoHang(@RequestBody LoHang loHang) {
        loHangService.edit(loHang);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/search")
    public ResponseEntity<List<LoHang>> searchLoHAang(@RequestParam String ten,
                                                     @RequestParam String ngayHetHan){
        List<LoHang> loHangs = loHangService.searchLoHang(ten,ngayHetHan);
        return new ResponseEntity<>(loHangs, HttpStatus.OK);
    }
}
