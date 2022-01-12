function layPhiXuLyHoaDon(loaiKH) {
  if (loaiKH === "nhaDan") {
    return 4.5;
  }
  if (loaiKH === "doanhNghiep") {
    return 15;
  }
}
function layPhiDichVuCoBan(loaiKH) {
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  if (loaiKH === "nhaDan") {
    return 20.5;
  }
  if (loaiKH === "doanhNghiep") {
    if (soKetNoi <= 10) {
      var phiDichVuCB = 7.5 * soKetNoi;
    } else {
      phiDichVuCB = 75 + (soKetNoi - 10) * 5;
    }
    return phiDichVuCB;
  }
}
function layPhiThueKenhCaoCap(loaiKH) {
  if (loaiKH === "nhaDan") {
    return 7.5;
  }
  if (loaiKH === "doanhNghiep") {
    return 50;
  }
}

function xuatHoaDon() {
  var loaiKHValue = document.querySelector(
    'input[name="optradio"]:checked'
  ).value;
  //   console.log(loaiKHValue);
  var tongHoaDon = 0;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;

  var phiXuLyHoaDon = layPhiXuLyHoaDon(loaiKHValue);
  var phiDichVuCoBan = layPhiDichVuCoBan(loaiKHValue);
  var phiKenhCaoCap = layPhiThueKenhCaoCap(loaiKHValue);
  //   console.log(phiXuLyHoaDon, phiDichVuCoBan, phiKenhCaoCap);

  if (loaiKHValue === "doanhNghiep") {
    document.getElementById("kenh").style.display = "block";
  } else {
    document.getElementById("kenh").style.display = "none";
  }
  tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap * soKenhCaoCap;
  document.getElementById("xuatKQ").innerText =
    "Tổng Hóa Đơn: " + tongHoaDon + " $";
}
