/*
    =========================================================
    1. GIÁ VÉ
    =========================================================
*/
const BANG_GIA_VE = {
  "nguoi-lon": {
    thuong: 80000,
    cuoiTuan: 105000,
  },
  "sinh-vien": {
    thuong: 60000,
    cuoiTuan: 78000,
  },
  "tre-em": {
    thuong: 30000,
    cuoiTuan: 39000,
  },
};

const PHU_THU_GHE_DOI = 10000;

/*
    =========================================================
    2. DANH SÁCH KHUYẾN MÃI
    =========================================================
*/
const danhSachKhuyenMai = [
  {
    ma: "KHAITRUONG30",
    ten: "Khai trương rạp Plant Cinema - Ưu đãi khủng 30%",
    loai: "giam-phan-tram",
    phanTramGiam: 30,
    tuNgay: "20/05/2026",
    denNgay: "25/05/2026",
    apDungLoaiVe: ["tat-ca"],
    soLuotMacDinh: 100,
  },
  {
    ma: "THIEUNHI_BAPNUOC",
    ten: "Khuyến mãi Tết Thiếu Nhi 1/6 - Miễn phí bắp nước",
    loai: "mien-phi-bap-nuoc",
    tuNgay: "01/06/2026",
    denNgay: "01/06/2026",
    apDungLoaiVe: ["tre-em"],
    soLuotMacDinh: 100,
  },
  {
    ma: "MOONFEST",
    ten: "Khuyến mãi đặc biệt dịp Trung Thu - Mua 2 tặng 1",
    loai: "mua-2-tang-1",
    tuNgay: "01/09/2026",
    denNgay: "15/09/2026",
    apDungLoaiVe: ["tat-ca"],
    soLuotMacDinh: 50,
  },
];

/*
    =========================================================
    3. BIẾN LƯU TRẠNG THÁI
    =========================================================
*/
let phimHienTai = null;
let tenPhimHienTai = "";

let ngayDuocChon = "";
let gioDuocChon = "";
let uuTienGioTuLink = "";

/*
    Mỗi ghế lưu cả tên ghế và loại vé.
    Ví dụ:
    { tenGhe: "A1", loaiVe: "nguoi-lon" }
*/
let danhSachGheDaChon = [];

let tienGoc = 0;
let tienDuocGiam = 0;
let tongTienVe = 0;
let uuDaiBapNuoc = false;

/*
    =========================================================
    4. KHI TRANG VỪA MỞ
    =========================================================
*/
document.addEventListener("DOMContentLoaded", function () {
  khoiTaoLuotKhuyenMai();

  let duongLink = new URLSearchParams(window.location.search);
  let idPhim = parseInt(duongLink.get("id"));
  let ngayTuLink = duongLink.get("ngay");
  uuTienGioTuLink = duongLink.get("gio");

  if (typeof khoPhim !== "undefined") {
    phimHienTai = timPhimTheoId(idPhim);
  }

  if (phimHienTai !== null) {
    tenPhimHienTai = phimHienTai.ten;
    document.getElementById("ten-phim").innerText = phimHienTai.ten;

    renderDanhSachNgay(ngayTuLink);
  } else {
    document.getElementById("ten-phim").innerText = "Không tìm thấy phim";
    document.getElementById("khung-ngay").innerHTML = "<p class='chu-mo'>Không có dữ liệu ngày chiếu.</p>";
    document.getElementById("khung-gio").innerHTML = "<p class='chu-mo'>Không có dữ liệu giờ chiếu.</p>";
  }

  veSoDoGhe();
  veDanhSachVeTheoGhe();
  veDanhSachKhuyenMai();
  tinhLaiTongTien();
});

/*
    =========================================================
    5. TÌM PHIM THEO ID
    =========================================================
*/
function timPhimTheoId(idPhim) {
  for (let i = 0; i < khoPhim.length; i++) {
    if (khoPhim[i].id === idPhim) {
      return khoPhim[i];
    }
  }

  return null;
}

/*
    =========================================================
    6. THÔNG BÁO
    =========================================================
*/
function hienThongBao(tinNhan) {
  let hopThongBao = document.getElementById("thong-bao-custom");

  hopThongBao.innerHTML = "⚠️ " + tinNhan;
  hopThongBao.classList.add("hien-thi");

  setTimeout(function () {
    hopThongBao.classList.remove("hien-thi");
  }, 2500);
}

/*
    =========================================================
    7. XỬ LÝ NGÀY
    =========================================================
*/
function doiNgayThanhDate(chuoiNgay) {
  let p = chuoiNgay.split("/");
  return new Date(p[2], p[1] - 1, p[0]);
}

function layTenThu(chuoiNgay) {
  let d = doiNgayThanhDate(chuoiNgay);
  let thu = d.getDay();

  if (thu === 0) {
    return "Chủ nhật";
  }

  return "Thứ " + (thu + 1);
}

function laNgayCuoiTuan(chuoiNgay) {
  if (!chuoiNgay) {
    return false;
  }

  let d = doiNgayThanhDate(chuoiNgay);
  let thu = d.getDay();

  return thu === 0 || thu === 5 || thu === 6;
}

/*
    =========================================================
    8. VẼ NGÀY CHIẾU
    =========================================================
*/
function renderDanhSachNgay(ngayUuTien) {
  if (phimHienTai === null || !phimHienTai.suatChieu) {
    return;
  }

  let danhSachNgay = Object.keys(phimHienTai.suatChieu);

  if (danhSachNgay.length === 0) {
    return;
  }

  if (ngayUuTien && danhSachNgay.includes(ngayUuTien)) {
    ngayDuocChon = ngayUuTien;
  } else if (ngayDuocChon === "" || !danhSachNgay.includes(ngayDuocChon)) {
    ngayDuocChon = danhSachNgay[0];
  }

  let html = "";

  for (let i = 0; i < danhSachNgay.length; i++) {
    let ngay = danhSachNgay[i];
    let classDangChon = "";

    if (ngay === ngayDuocChon) {
      classDangChon = "dang-chon";
    }

    html += `
      <button class="nut-ngay ${classDangChon}" onclick="chonNgay('${ngay}')">
        ${ngay.substring(0, 5)}
        <small>${layTenThu(ngay)}</small>
      </button>
    `;
  }

  document.getElementById("khung-ngay").innerHTML = html;

  renderDanhSachGio(uuTienGioTuLink);
  uuTienGioTuLink = "";
}

function chonNgay(ngay) {
  ngayDuocChon = ngay;

  renderDanhSachNgay(ngay);
  veDanhSachKhuyenMai();
  tinhLaiTongTien();
}

/*
    =========================================================
    9. VẼ GIỜ CHIẾU
    =========================================================
*/
function renderDanhSachGio(gioUuTien) {
  if (phimHienTai === null || !phimHienTai.suatChieu || !phimHienTai.suatChieu[ngayDuocChon]) {
    return;
  }

  let danhSachGio = phimHienTai.suatChieu[ngayDuocChon];

  if (gioUuTien && danhSachGio.includes(gioUuTien)) {
    gioDuocChon = gioUuTien;
  } else if (gioDuocChon === "" || !danhSachGio.includes(gioDuocChon)) {
    gioDuocChon = danhSachGio[0];
  }

  let html = "";

  for (let i = 0; i < danhSachGio.length; i++) {
    let gio = danhSachGio[i];
    let classDangChon = "";

    if (gio === gioDuocChon) {
      classDangChon = "dang-chon";
    }

    html += `
      <button class="nut-gio ${classDangChon}" onclick="chonGio('${gio}')">
        ${gio}
      </button>
    `;
  }

  document.getElementById("khung-gio").innerHTML = html;
}

function chonGio(gio) {
  gioDuocChon = gio;
  renderDanhSachGio(gio);
}

/*
    =========================================================
    10. VẼ SƠ ĐỒ GHẾ
    =========================================================
*/
function veSoDoGhe() {
  let khungGhe = document.getElementById("khung-chua-ghe");

  let html = "";
  let cacHangGheThuong = ["A", "B", "C", "D"];

  let gheDaBan = ["B7", "C3", "D1", "D8", "E3"];

  for (let i = 0; i < cacHangGheThuong.length; i++) {
    let hang = cacHangGheThuong[i];

    for (let j = 1; j <= 8; j++) {
      let tenGhe = hang + j;
      let classGhe = "ghe";

      if (gheDaBan.includes(tenGhe)) {
        classGhe += " ghe-da-ban";
      }

      html += `
        <button class="${classGhe}" onclick="chonGhe('${tenGhe}', this)">
          ${tenGhe}
        </button>
      `;
    }
  }

  for (let j = 1; j <= 4; j++) {
    let tenGhe = "E" + j;
    let classGhe = "ghe ghe-doi";

    if (gheDaBan.includes(tenGhe)) {
      classGhe += " ghe-da-ban";
    }

    html += `
      <button class="${classGhe}" onclick="chonGhe('${tenGhe}', this)">
        ${tenGhe}
      </button>
    `;
  }

  khungGhe.innerHTML = html;
}

function chonGhe(tenGhe, theGhe) {
  if (theGhe.classList.contains("ghe-da-ban")) {
    hienThongBao("Ghế này đã được bán!");
    return;
  }

  if (theGhe.classList.contains("ghe-dang-chon")) {
    theGhe.classList.remove("ghe-dang-chon");
    xoaGhe(tenGhe);
  } else {
    let loaiVeMacDinh = document.getElementById("chon-loai-ve").value;

    theGhe.classList.add("ghe-dang-chon");

    danhSachGheDaChon.push({
      tenGhe: tenGhe,
      loaiVe: loaiVeMacDinh,
    });
  }

  sapXepGheDaChon();
  veDanhSachVeTheoGhe();
  veDanhSachKhuyenMai();
  tinhLaiTongTien();
}

function xoaGhe(tenGhe) {
  let danhSachMoi = [];

  for (let i = 0; i < danhSachGheDaChon.length; i++) {
    if (danhSachGheDaChon[i].tenGhe !== tenGhe) {
      danhSachMoi.push(danhSachGheDaChon[i]);
    }
  }

  danhSachGheDaChon = danhSachMoi;
}

function sapXepGheDaChon() {
  danhSachGheDaChon.sort(function (a, b) {
    return a.tenGhe.localeCompare(b.tenGhe);
  });
}

/*
    =========================================================
    11. DANH SÁCH VÉ THEO TỪNG GHẾ
    =========================================================
*/
function layTenLoaiVe(loaiVe) {
  if (loaiVe === "nguoi-lon") {
    return "Người lớn";
  }

  if (loaiVe === "sinh-vien") {
    return "Sinh viên";
  }

  if (loaiVe === "tre-em") {
    return "Trẻ em";
  }

  return "Không rõ";
}

function veDanhSachVeTheoGhe() {
  let khung = document.getElementById("danh-sach-ve-theo-ghe");

  if (!khung) {
    return;
  }

  if (danhSachGheDaChon.length === 0) {
    khung.innerHTML = "<p class='chu-mo'>Chưa chọn ghế nào.</p>";
    return;
  }

  let html = "";

  for (let i = 0; i < danhSachGheDaChon.length; i++) {
    let ghe = danhSachGheDaChon[i];

    html += `
      <div style="background:#161616; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:10px; margin-bottom:8px;">
        <div style="color:#ffffff; font-weight:bold; margin-bottom:8px;">
          Ghế ${ghe.tenGhe}
        </div>

        <select
          onchange="doiLoaiVeCuaGhe('${ghe.tenGhe}', this.value)"
          style="width:100%; background:#0a0a0a; color:#ffffff; border:1px solid rgba(147,233,190,0.45); border-radius:8px; padding:8px 10px; outline:none;"
        >
          <option value="nguoi-lon" ${ghe.loaiVe === "nguoi-lon" ? "selected" : ""}>Người lớn</option>
          <option value="sinh-vien" ${ghe.loaiVe === "sinh-vien" ? "selected" : ""}>Học sinh - Sinh viên</option>
          <option value="tre-em" ${ghe.loaiVe === "tre-em" ? "selected" : ""}>Trẻ em</option>
        </select>
      </div>
    `;
  }

  khung.innerHTML = html;
}

function doiLoaiVeCuaGhe(tenGhe, loaiVeMoi) {
  for (let i = 0; i < danhSachGheDaChon.length; i++) {
    if (danhSachGheDaChon[i].tenGhe === tenGhe) {
      danhSachGheDaChon[i].loaiVe = loaiVeMoi;
      break;
    }
  }

  veDanhSachVeTheoGhe();
  veDanhSachKhuyenMai();
  tinhLaiTongTien();
}

/*
    =========================================================
    12. DROPDOWN LOẠI VÉ VÀ KHUYẾN MÃI
    =========================================================
*/
function batTatDropdown() {
  document.getElementById("dropdown-loai-ve").classList.toggle("mo");
}

function batTatDropdownKhuyenMai() {
  document.getElementById("dropdown-khuyen-mai").classList.toggle("mo");
}

function chonLoaiVe(maLoaiVe, tenLoaiVe, theHTML) {
  let oHienThiLoaiVe = document.querySelector("#dropdown-loai-ve .dropdown-hien-thi");
  oHienThiLoaiVe.innerText = tenLoaiVe;

  document.getElementById("chon-loai-ve").value = maLoaiVe;

  let tatCaMucLoaiVe = document.querySelectorAll("#dropdown-loai-ve .dropdown-muc");

  for (let i = 0; i < tatCaMucLoaiVe.length; i++) {
    tatCaMucLoaiVe[i].classList.remove("dang-chon");
  }

  theHTML.classList.add("dang-chon");
  document.getElementById("dropdown-loai-ve").classList.remove("mo");
}

function chonKhuyenMai(maKhuyenMai, tenKhuyenMai, theHTML) {
  document.getElementById("hien-thi-khuyen-mai").innerText = tenKhuyenMai;
  document.getElementById("khuyen-mai").value = maKhuyenMai;

  let tatCaMucKhuyenMai = document.querySelectorAll("#danh-sach-khuyen-mai .dropdown-muc");

  for (let i = 0; i < tatCaMucKhuyenMai.length; i++) {
    tatCaMucKhuyenMai[i].classList.remove("dang-chon");
  }

  theHTML.classList.add("dang-chon");
  document.getElementById("dropdown-khuyen-mai").classList.remove("mo");

  tinhLaiTongTien();
}

window.onclick = function (e) {
  if (!e.target.matches(".dropdown-hien-thi")) {
    document.getElementById("dropdown-loai-ve").classList.remove("mo");
    document.getElementById("dropdown-khuyen-mai").classList.remove("mo");
  }
};

/*
    =========================================================
    13. LƯỢT SỬ DỤNG KHUYẾN MÃI
    =========================================================
*/
function khoiTaoLuotKhuyenMai() {
  let duLieuCu = localStorage.getItem("voucher_remains");

  if (duLieuCu) {
    return;
  }

  let duLieuMoi = {};

  for (let i = 0; i < danhSachKhuyenMai.length; i++) {
    let km = danhSachKhuyenMai[i];
    duLieuMoi[km.ma] = km.soLuotMacDinh;
  }

  localStorage.setItem("voucher_remains", JSON.stringify(duLieuMoi));
}

function laySoLuotConLai(maKhuyenMai) {
  let duLieu = localStorage.getItem("voucher_remains");

  if (!duLieu) {
    return 0;
  }

  let danhSachLuot = JSON.parse(duLieu);

  if (danhSachLuot[maKhuyenMai] === undefined) {
    return 0;
  }

  return danhSachLuot[maKhuyenMai];
}

function truLuotKhuyenMai(maKhuyenMai) {
  let duLieu = localStorage.getItem("voucher_remains");

  if (!duLieu) {
    return false;
  }

  let danhSachLuot = JSON.parse(duLieu);

  if (!danhSachLuot[maKhuyenMai] || danhSachLuot[maKhuyenMai] <= 0) {
    return false;
  }

  danhSachLuot[maKhuyenMai] = danhSachLuot[maKhuyenMai] - 1;
  localStorage.setItem("voucher_remains", JSON.stringify(danhSachLuot));

  return true;
}

/*
    =========================================================
    14. KIỂM TRA KHUYẾN MÃI
    =========================================================
*/
function khuyenMaiConHan(km) {
  if (!ngayDuocChon) {
    return false;
  }

  let ngayChieu = doiNgayThanhDate(ngayDuocChon);
  let ngayBatDau = doiNgayThanhDate(km.tuNgay);
  let ngayKetThuc = doiNgayThanhDate(km.denNgay);

  if (ngayChieu < ngayBatDau) {
    return false;
  }

  if (ngayChieu > ngayKetThuc) {
    return false;
  }

  return true;
}

function coQuyenDungKhuyenMai(km) {
  for (let i = 0; i < km.apDungLoaiVe.length; i++) {
    if (km.apDungLoaiVe[i] === "tat-ca") {
      return true;
    }
  }

  for (let i = 0; i < danhSachGheDaChon.length; i++) {
    let ghe = danhSachGheDaChon[i];

    for (let j = 0; j < km.apDungLoaiVe.length; j++) {
      if (ghe.loaiVe === km.apDungLoaiVe[j]) {
        return true;
      }
    }
  }

  return false;
}

function khuyenMaiHopLe(km) {
  if (!khuyenMaiConHan(km)) {
    return false;
  }

  if (!coQuyenDungKhuyenMai(km)) {
    return false;
  }

  if (laySoLuotConLai(km.ma) <= 0) {
    return false;
  }

  return true;
}

/*
    =========================================================
    15. VẼ DANH SÁCH KHUYẾN MÃI
    =========================================================
*/
function veDanhSachKhuyenMai() {
  let khungDanhSach = document.getElementById("danh-sach-khuyen-mai");
  let oKhuyenMai = document.getElementById("khuyen-mai");
  let hienThiKhuyenMai = document.getElementById("hien-thi-khuyen-mai");

  let html = `
    <div class="dropdown-muc dang-chon" onclick="chonKhuyenMai('', 'Không áp dụng khuyến mãi', this)">
      Không áp dụng khuyến mãi
    </div>
  `;

  let coKhuyenMai = false;

  for (let i = 0; i < danhSachKhuyenMai.length; i++) {
    let km = danhSachKhuyenMai[i];

    if (khuyenMaiHopLe(km)) {
      coKhuyenMai = true;

      let soLuot = laySoLuotConLai(km.ma);
      let tenHienThi = km.ten + " - còn " + soLuot + " lượt";

      html += `
        <div class="dropdown-muc" onclick="chonKhuyenMai('${km.ma}', '${tenHienThi}', this)">
          ${tenHienThi}
        </div>
      `;
    }
  }

  khungDanhSach.innerHTML = html;

  oKhuyenMai.value = "";
  hienThiKhuyenMai.innerText = "Không áp dụng khuyến mãi";

  if (ngayDuocChon === "") {
    document.getElementById("ghi-chu-khuyen-mai").innerText = "Chọn ngày chiếu để xem khuyến mãi phù hợp.";
  } else if (coKhuyenMai) {
    document.getElementById("ghi-chu-khuyen-mai").innerText = "Khuyến mãi đã được lọc theo ngày chiếu, loại vé và số lượt.";
  } else {
    document.getElementById("ghi-chu-khuyen-mai").innerText = "Không có khuyến mãi phù hợp với ngày chiếu hoặc loại vé này.";
  }
}

function layKhuyenMaiDangChon() {
  let ma = document.getElementById("khuyen-mai").value;

  if (ma === "") {
    return null;
  }

  for (let i = 0; i < danhSachKhuyenMai.length; i++) {
    if (danhSachKhuyenMai[i].ma === ma) {
      return danhSachKhuyenMai[i];
    }
  }

  return null;
}

/*
    =========================================================
    16. TÍNH TIỀN
    =========================================================
*/
function tinhLaiTongTien() {
  hienThiGheDaChon();

  tienGoc = 0;
  tienDuocGiam = 0;
  tongTienVe = 0;
  uuDaiBapNuoc = false;

  let danhSachGiaGhe = [];

  for (let i = 0; i < danhSachGheDaChon.length; i++) {
    let ghe = danhSachGheDaChon[i];

    let giaCoBan = BANG_GIA_VE[ghe.loaiVe].thuong;

    if (laNgayCuoiTuan(ngayDuocChon)) {
      giaCoBan = BANG_GIA_VE[ghe.loaiVe].cuoiTuan;
    }

    let giaGhe = giaCoBan;

    if (ghe.tenGhe.startsWith("E")) {
      giaGhe = giaCoBan * 2 + PHU_THU_GHE_DOI;
    }

    tienGoc = tienGoc + giaGhe;
    danhSachGiaGhe.push(giaGhe);
  }

  let km = layKhuyenMaiDangChon();
  let ghiChu = "";

  if (km !== null) {
    if (!khuyenMaiHopLe(km)) {
      hienThongBao("Khuyến mãi này không còn hợp lệ!");

      document.getElementById("khuyen-mai").value = "";
      document.getElementById("hien-thi-khuyen-mai").innerText = "Không áp dụng khuyến mãi";

      km = null;
    }
  }

  if (km !== null) {
    if (km.loai === "giam-phan-tram") {
      tienDuocGiam = (tienGoc * km.phanTramGiam) / 100;
      ghiChu = "Đã giảm " + km.phanTramGiam + "% tiền vé.";
    }

    if (km.loai === "mien-phi-bap-nuoc") {
      uuDaiBapNuoc = true;
      ghiChu = "Ưu đãi này sẽ được áp dụng ở bước mua bắp nước.";
    }

    if (km.loai === "mua-2-tang-1") {
      if (danhSachGheDaChon.length >= 3) {
        danhSachGiaGhe.sort(function (a, b) {
          return a - b;
        });

        let soVeDuocTang = Math.floor(danhSachGheDaChon.length / 3);

        for (let i = 0; i < soVeDuocTang; i++) {
          tienDuocGiam = tienDuocGiam + danhSachGiaGhe[i];
        }

        ghiChu = "Mua 2 tặng 1: miễn phí " + soVeDuocTang + " vé rẻ nhất.";
      } else {
        ghiChu = "Cần chọn ít nhất 3 ghế để dùng mã mua 2 tặng 1.";
      }
    }
  }

  tongTienVe = tienGoc - tienDuocGiam;

  hienThiKhuyenMai(km, ghiChu);
  hienThiTongTien();
}

function hienThiGheDaChon() {
  let oGhe = document.getElementById("chu-hien-thi-ghe");

  if (danhSachGheDaChon.length === 0) {
    oGhe.innerText = "Chưa chọn";
    return;
  }

  let chuoi = "";

  for (let i = 0; i < danhSachGheDaChon.length; i++) {
    let ghe = danhSachGheDaChon[i];

    chuoi += ghe.tenGhe + " (" + layTenLoaiVe(ghe.loaiVe) + ")";

    if (i < danhSachGheDaChon.length - 1) {
      chuoi += ", ";
    }
  }

  oGhe.innerText = chuoi;
}

function hienThiKhuyenMai(km, ghiChu) {
  let oTenKhuyenMai = document.getElementById("chu-hien-thi-khuyen-mai");

  if (km === null) {
    oTenKhuyenMai.innerText = "Không áp dụng";
  } else {
    oTenKhuyenMai.innerText = km.ma;
  }

  if (ghiChu !== "") {
    document.getElementById("ghi-chu-khuyen-mai").innerText = ghiChu;
  }
}

function hienThiTongTien() {
  let oTongTien = document.getElementById("chu-hien-thi-tong-tien");

  if (tienDuocGiam > 0) {
    oTongTien.innerHTML = `
      <span class="gia-goc">${tienGoc.toLocaleString("vi-VN")}đ</span>
      <span class="gia-giam">- ${tienDuocGiam.toLocaleString("vi-VN")}đ</span>
      ${tongTienVe.toLocaleString("vi-VN")}đ
    `;
  } else {
    oTongTien.innerText = tongTienVe.toLocaleString("vi-VN") + "đ";
  }
}

/*
    =========================================================
    17. SANG TRANG BẮP NƯỚC
    =========================================================
*/
function layDanhSachTenGhe() {
  let danhSachTenGhe = [];

  for (let i = 0; i < danhSachGheDaChon.length; i++) {
    danhSachTenGhe.push(danhSachGheDaChon[i].tenGhe);
  }

  return danhSachTenGhe;
}

function layTomTatLoaiVe() {
  if (danhSachGheDaChon.length === 0) {
    return "";
  }

  let loaiDauTien = danhSachGheDaChon[0].loaiVe;

  for (let i = 1; i < danhSachGheDaChon.length; i++) {
    if (danhSachGheDaChon[i].loaiVe !== loaiDauTien) {
      return "Nhiều loại vé";
    }
  }

  return layTenLoaiVe(loaiDauTien);
}

function chuyenTrangBapNuoc() {
  if (danhSachGheDaChon.length === 0) {
    hienThongBao("Bạn chưa chọn ghế nào!");
    return;
  }

  let km = layKhuyenMaiDangChon();
  let maKhuyenMai = "";
  let tenKhuyenMai = "Không áp dụng";

  if (km !== null) {
    if (!khuyenMaiHopLe(km)) {
      hienThongBao("Khuyến mãi đã hết hạn, hết lượt hoặc không đúng loại vé!");
      veDanhSachKhuyenMai();
      tinhLaiTongTien();
      return;
    }

    maKhuyenMai = km.ma;
    tenKhuyenMai = km.ten;

    let truThanhCong = truLuotKhuyenMai(km.ma);

    if (!truThanhCong) {
      hienThongBao("Mã khuyến mãi đã hết lượt!");
      veDanhSachKhuyenMai();
      tinhLaiTongTien();
      return;
    }
  }

  let donHang = {
    idPhim: phimHienTai ? phimHienTai.id : "",
    tenPhim: tenPhimHienTai,
    ngayChieu: ngayDuocChon,
    gioChieu: gioDuocChon,

    gheDaChon: layDanhSachTenGhe(),
    chiTietVe: danhSachGheDaChon,
    loaiVe: layTomTatLoaiVe(),

    maKhuyenMai: maKhuyenMai,
    khuyenMai: tenKhuyenMai,
    uuDaiBapNuoc: uuDaiBapNuoc,

    tienVeGoc: tienGoc,
    tienDuocGiam: tienDuocGiam,
    tienVe: tongTienVe,
  };

  localStorage.setItem("thongTinDonHang", JSON.stringify(donHang));

  window.location.href = "datbongnuoc.html";
}
