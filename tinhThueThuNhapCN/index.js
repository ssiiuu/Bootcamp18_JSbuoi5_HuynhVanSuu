function layThueSuat(thunhap) {
  if (thunhap <= 60) {
    return 5;
  }
  if (thunhap > 60 && thunhap <= 120) {
    return 10;
  }
  if (thunhap > 120 && thunhap <= 210) {
    return 15;
  }
  if (thunhap > 210 && thunhap <= 384) {
    return 20;
  }
  if (thunhap > 384 && thunhap <= 624) {
    return 25;
  }
  if (thunhap > 624 && thunhap <= 960) {
    return 30;
  }
  if (thunhap > 960) {
    return 25;
  }
}

function ketQua() {
  var tongNamValue = document.getElementById("tongNam").value * 1;
  var soNguoiValue = document.getElementById("soNguoi").value * 1;
  var thuNhapChiuThue = tongNamValue - 4 - soNguoiValue * 1.6;
  var thueSuatValue = layThueSuat(thuNhapChiuThue);
  //   console.log(thueSuatValue);
  var tienThue = 0;
  tienThue = (thueSuatValue * thuNhapChiuThue) / 100;
  document.getElementById("xuatKQ").innerText =
    "Tổng tiền thuế thu nhập cá nhân bạn phải trả là: " +
    tienThue.toLocaleString() +
    " triệu VND";
}
