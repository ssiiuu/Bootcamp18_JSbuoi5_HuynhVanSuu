function tinhTien() {
  var soKWValue = document.getElementById("soKW").value * 1;
  var tongTien = 0;
  if (soKWValue <= 50) {
    tongTien = soKWValue * 500;
  } else if (soKWValue > 50 && soKWValue <= 100) {
    tongTien = 500 * 50 + (soKWValue - 50) * 650;
  } else if (soKWValue > 100 && soKWValue <= 200) {
    tongTien = 500 * 50 + 650 * 50 + (soKWValue - 100) * 850;
  } else if (soKWValue > 200 && soKWValue <= 350) {
    tongTien = 500 * 50 + 650 * 50 + 850 * 100 + (soKWValue - 200) * 1100;
  } else {
    tongTien =
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (soKWValue - 350) * 1300;
  }
  document.getElementById("xuatKQ").innerText =
    "Tổng tiền: " + tongTien.toLocaleString() + "VND";
}
