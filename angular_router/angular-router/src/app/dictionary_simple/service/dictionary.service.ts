import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: Dictionary[] = [{
    name: "Pink",
    mean: "màu hồng, màu đại diện cho tình yêu, trùng tên với một loài hoa ở VN",
    otherDetail:"Câu chữ tương tự\n" +
      "Anh đào (171 byte)\n" +
      "2: ... với hoa hồng, quả có vỏ nhẵn bóng, màu đỏ hoặc vàng nhạt, vị ngọt, ăn đư...\n" +
      "Ánh (554 byte)\n" +
      "9: ===== mảng ánh sáng có màu sắc =====\n" +
      "11: :''pha ánh hồng''\n" +
      "Ăn (2.237 byte)\n" +
      "6: :''cỏ ăn hết màu''\n" +
      "24: :''ăn hoa hồng''\n" +
      "39: :''vải ăn màu''\n" +
      "49: :''chiếc áo đen ăn với màu da trắng''\n" +
      "Mua (788 byte)\n" +
      "2: ...có nhiều lông, lá mọc đối, hoa to, màu hồng tím, quả rắn có hình trứng. =====\n" +
      "Muôn hồng nghìn tía (225 byte)\n" +
      "1: ===== nhiều màu sắc rực rỡ, tạo nên cảnh sắc lộng ...\n" +
      "2: :''cả một rừng hoa muôn hồng nghìn tía đang khoe sắc''"
  },
    {
      name: "House",
      mean: "nhà",
      otherDetail:"công trình xây dựng có mái, có tường vách để ở hay để sử dụng vào một việc nào đó\n" +
        "xây nhà\n" +
        "căn nhà lá\n" +
        "đồ đạc để đầy nhà\n" +
        "nhà dột từ nóc dột xuống (tng)\n" +
        "chỗ ở riêng, thường cùng với gia đình\n" +
        "ốm nên phải nghỉ ở nhà\n" +
        "sang nhà hàng xóm chơi\n" +
        "tập hợp người có quan hệ gia đình cùng ở trong một nhà\n" +
        "người trong nhà\n" +
        "bận việc nhà\n" +
        "ăn cơm nhà vác tù và hàng tổng (tng)\n" +
        "tập hợp những vua cùng một dòng họ kế tiếp nhau trị vì\n" +
        "nhà Lý lập đô ở Thăng Long\n" +
        "đời nhà Lê"
    },
    {
      name: "Student",
      mean: "Học sinh",
      otherDetail:"người học ở bậc phổ thông\n" +
        "học sinh tiểu học\n" +
        "thời học sinh\n" +
        "Đồng nghĩa: học trò"
    }]

  constructor() {
  }

  getAll() {
    return this.dictionaryList;
  }

  findByName(name: string) {
    let temp = this.dictionaryList.filter(element => element.name == name);
    if(temp.length==0){
      return null;
    }
    return temp[0];
  }
}
