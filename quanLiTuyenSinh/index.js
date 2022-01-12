function layDiemKhuVuc(khuvuc) {
  if (khuvuc === "A") {
    return 2;
  }
  if (khuvuc === "B") {
    return 1;
  }
  if (khuvuc === "C") {
    return 0.5;
  }
  if (khuvuc === "X") {
    return 0;
  }
}
function layDiemDoiTuong(doituong) {
  if (doituong === "1") {
    return 2.5;
  }
  if (doituong === "2") {
    return 1.5;
  }
  if (doituong === "3") {
    return 1;
  }
  if (doituong === "0") {
    return 0;
  }
}

function ketQua() {
  var diem1Value = document.getElementById("diem1").value * 1;
  var diem2Value = document.getElementById("diem2").value * 1;
  var diem3Value = document.getElementById("diem3").value * 1;
  var diemChuanValue = document.getElementById("diemChuan").value * 1;

  var khuVucValue = document.getElementById("khuVuc").value;
  var doiTuongValue = document.getElementById("doiTuong").value;

  var diemKVUuTien = layDiemKhuVuc(khuVucValue);
  var diemDTUuTien = layDiemDoiTuong(doiTuongValue);
  //   console.log(diemKVUuTien, diemDTUuTien);
  var tongDiem = 0;
  tongDiem = diem1Value + diem2Value + diem3Value + diemKVUuTien + diemDTUuTien;
  document.getElementById("xuatTongDiem").innerText = "Tổng điểm: " + tongDiem;
  if (
    diem1Value == 0 ||
    diem2Value == 0 ||
    diem3Value == 0 ||
    tongDiem < diemChuanValue
  ) {
    document.getElementById("xuatKQ").innerText = "Bạn đã thi rớt kỳ thi";
  } else {
    document.getElementById("xuatKQ").innerText =
      "Chúc mừng bạn đã trúng tuyển";
  }
}
