/* =========================================================
    GIÁ VÉ 
    =========================================================*/
const BANG_GIA_VE = {
  "nguoi-lon": { thuong: 80000, cuoiTuan: 105000 },
  "sinh-vien": { thuong: 60000, cuoiTuan: 78000 },
  "tre-em": { thuong: 30000, cuoiTuan: 39000 },
};

const PHU_THU_GHE_DOI = 10000;
const PHU_THU_GHE_VIP = 20000;

/* =========================================================
    DANH SÁCH KHUYẾN MÃI
    =========================================================*/
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
    tuNgay: "30/05/2026",
    denNgay: "02/06/2026",
    apDungLoaiVe: ["tre-em"],
    soLuotMacDinh: 100,
  },
  {
    ma: "MOONFEST",
    ten: "Khuyến mãi đặc biệt dịp Trung Thu - Mua 2 tặng 1",
    loai: "mua-2-tang-1",
    tuNgay: "03/06/2026",
    denNgay: "15/09/2026",
    apDungLoaiVe: ["tat-ca"],
    soLuotMacDinh: 50,
  },
];

/*=========================================================
    BIẾN LƯU TRẠNG THÁI
    =========================================================*/
let phimHienTai = null;
let tenPhimHienTai = "";

let ngayDuocChon = "";
let gioDuocChon = "";
let uuTienGioTuLink = "";

let danhSachGheDaChon = [];

let tienGoc = 0;
let tienDuocGiam = 0;
let tongTienVe = 0;
let uuDaiBapNuoc = false;

/* =========================================================
    LOAD MỞ TRANG
    =========================================================*/
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
    document.getElementById("ten-phim").innerText = "Chưa chọn phim từ hệ thống!";
    document.getElementById("khung-ngay").innerHTML = "<p class='chu-mo'>Vui lòng quay lại Trang chủ và bấm nút Đặt vé.</p>";
    document.getElementById("khung-gio").innerHTML = "";
  }

  veSoDoGhe();
  veDanhSachVeTheoGhe();
  veDanhSachKhuyenMai();
  tinhLaiTongTien();
});

function timPhimTheoId(idPhim) {
  for (let i = 0; i < khoPhim.length; i++) {
    if (khoPhim[i].id === idPhim) return khoPhim[i];
  }
  return null;
}

function hienThongBao(tinNhan) {
  let hopThongBao = document.getElementById("thong-bao-custom");
  hopThongBao.innerHTML = "⚠️ " + tinNhan;
  hopThongBao.classList.add("hien-thi");
  setTimeout(function () {
    hopThongBao.classList.remove("hien-thi");
  }, 2500);
}

/* =========================================================
   XỬ LÝ NGÀY VÀ GIỜ CHIẾU
    =========================================================*/
function doiNgayThanhDate(chuoiNgay) {
  let p = chuoiNgay.split("/");
  return new Date(p[2], p[1] - 1, p[0]);
}

function layTenThu(chuoiNgay) {
  let d = doiNgayThanhDate(chuoiNgay);
  let thu = d.getDay();
  return thu === 0 ? "Chủ nhật" : "Thứ " + (thu + 1);
}

function laNgayCuoiTuan(chuoiNgay) {
  if (!chuoiNgay) return false;
  let thu = doiNgayThanhDate(chuoiNgay).getDay();
  return thu === 0 || thu === 5 || thu === 6;
}

function renderDanhSachNgay(ngayUuTien) {
  if (phimHienTai === null || !phimHienTai.suatChieu) return;

  let danhSachNgay = Object.keys(phimHienTai.suatChieu);
  if (danhSachNgay.length === 0) return;

  if (ngayUuTien && danhSachNgay.includes(ngayUuTien)) {
    ngayDuocChon = ngayUuTien;
  } else if (ngayDuocChon === "" || !danhSachNgay.includes(ngayDuocChon)) {
    ngayDuocChon = danhSachNgay[0];
  }

  let html = "";
  for (let i = 0; i < danhSachNgay.length; i++) {
    let ngay = danhSachNgay[i];
    let classDangChon = ngay === ngayDuocChon ? "dang-chon" : "";
    html += `<button class="nut-ngay ${classDangChon}" onclick="chonNgay('${ngay}')">${ngay.substring(0, 5)}<small>${layTenThu(ngay)}</small></button>`;
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

function renderDanhSachGio(gioUuTien) {
  if (phimHienTai === null || !phimHienTai.suatChieu || !phimHienTai.suatChieu[ngayDuocChon]) return;

  let danhSachGio = phimHienTai.suatChieu[ngayDuocChon];
  if (gioUuTien && danhSachGio.includes(gioUuTien)) {
    gioDuocChon = gioUuTien;
  } else if (gioDuocChon === "" || !danhSachGio.includes(gioDuocChon)) {
    gioDuocChon = danhSachGio[0];
  }

  let html = "";
  for (let i = 0; i < danhSachGio.length; i++) {
    let gio = danhSachGio[i];
    let classDangChon = gio === gioDuocChon ? "dang-chon" : "";
    html += `<button class="nut-gio ${classDangChon}" onclick="chonGio('${gio}')">${gio}</button>`;
  }
  document.getElementById("khung-gio").innerHTML = html;
}

function chonGio(gio) {
  gioDuocChon = gio;
  renderDanhSachGio(gio);
}

/*=========================================================
    VẼ SƠ ĐỒ GHẾ VÀ CHỌN GHẾ
    ========================================================*/
function veSoDoGhe() {
  let khungGhe = document.getElementById("khung-chua-ghe");
  let html = "";
  let cacHangGheThuong = ["A", "B", "C", "D"];
  let gheDaBan = ["B7", "C3", "D1", "D8", "E3"];

  for (let i = 0; i < cacHangGheThuong.length; i++) {
    for (let j = 1; j <= 8; j++) {
      let tenGhe = cacHangGheThuong[i] + j;
      let classGhe = "ghe" + (gheDaBan.includes(tenGhe) ? " ghe-da-ban" : "");
      html += `<button class="${classGhe}" onclick="chonGhe('${tenGhe}', this)">${tenGhe}</button>`;
    }
  }

  for (let j = 1; j <= 4; j++) {
    let tenGhe = "E" + j;
    let classGhe = "ghe ghe-doi" + (gheDaBan.includes(tenGhe) ? " ghe-da-ban" : "");
    html += `<button class="${classGhe}" onclick="chonGhe('${tenGhe}', this)">${tenGhe}</button>`;
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
    danhSachGheDaChon = danhSachGheDaChon.filter((g) => g.tenGhe !== tenGhe);
  } else {
    theGhe.classList.add("ghe-dang-chon");
    danhSachGheDaChon.push({ tenGhe: tenGhe, loaiVe: "nguoi-lon" });
  }

  danhSachGheDaChon.sort((a, b) => a.tenGhe.localeCompare(b.tenGhe));
  veDanhSachVeTheoGhe();
  veDanhSachKhuyenMai();
  tinhLaiTongTien();
}

/* =========================================================
    VẼ DROPDOWN CHO TỪNG GHẾ
    =========================================================*/
function layTenLoaiVe(loaiVe) {
  if (loaiVe === "nguoi-lon") return "Người lớn";
  if (loaiVe === "sinh-vien") return "Sinh viên";
  if (loaiVe === "tre-em") return "Trẻ em";
  return "Không rõ";
}

function veDanhSachVeTheoGhe() {
  let khung = document.getElementById("danh-sach-ve-theo-ghe");
  if (!khung) return;

  if (danhSachGheDaChon.length === 0) {
    khung.innerHTML = "<p class='chu-mo'>Chưa chọn ghế nào.</p>";
    return;
  }

  let html = "";
  for (let i = 0; i < danhSachGheDaChon.length; i++) {
    let ghe = danhSachGheDaChon[i];
    let tenHienThiLoaiVe = ghe.loaiVe === "sinh-vien" ? "Học sinh - Sinh viên" : ghe.loaiVe === "tre-em" ? "Trẻ em (Dưới 1m2)" : "Người lớn (Tiêu chuẩn)";

    html += `
      <div class="the-ghe-dynamic">
        <div class="tieu-de-ghe-dynamic">🟢 Ghế vị trí: ${ghe.tenGhe}</div>
        <div class="khung-dropdown" id="dropdown-ghe-${ghe.tenGhe}">
          <div class="dropdown-hien-thi" onclick="batTatDropdownGhe('${ghe.tenGhe}')">
            ${tenHienThiLoaiVe}
          </div>
          <div class="dropdown-danh-sach">
            <div class="dropdown-muc ${ghe.loaiVe === "nguoi-lon" ? "dang-chon" : ""}" onclick="chonLoaiVeChoGhe('${ghe.tenGhe}', 'nguoi-lon')">Người lớn (Tiêu chuẩn)</div>
            <div class="dropdown-muc ${ghe.loaiVe === "sinh-vien" ? "dang-chon" : ""}" onclick="chonLoaiVeChoGhe('${ghe.tenGhe}', 'sinh-vien')">Học sinh - Sinh viên</div>
            <div class="dropdown-muc ${ghe.loaiVe === "tre-em" ? "dang-chon" : ""}" onclick="chonLoaiVeChoGhe('${ghe.tenGhe}', 'tre-em')">Trẻ em (Dưới 1m2)</div>
          </div>
        </div>
      </div>
    `;
  }
  khung.innerHTML = html;
}

function batTatDropdownGhe(tenGhe) {
  document.querySelectorAll(".the-ghe-dynamic .khung-dropdown").forEach((dr) => {
    if (dr.id !== `dropdown-ghe-${tenGhe}`) dr.classList.remove("mo");
  });
  document.getElementById(`dropdown-ghe-${tenGhe}`).classList.toggle("mo");
}

function chonLoaiVeChoGhe(tenGhe, loaiVeMoi) {
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

function batTatDropdownKhuyenMai() {
  document.getElementById("dropdown-khuyen-mai").classList.toggle("mo");
}

// Ẩn tất cả dropdown khi click ra ngoài
window.onclick = function (e) {
  if (!e.target.matches(".dropdown-hien-thi")) {
    document.getElementById("dropdown-khuyen-mai")?.classList.remove("mo");
    document.querySelectorAll(".the-ghe-dynamic .khung-dropdown").forEach((dr) => dr.classList.remove("mo"));
  }
};

/*=========================================================
    KHỞI TẠO BỘ ĐẾM
    =========================================================*/
function khoiTaoLuotKhuyenMai() {
  let duLieuMoi = {};
  try {
    let duLieu = localStorage.getItem("voucher_remains");
    if (duLieu) duLieuMoi = JSON.parse(duLieu);
  } catch (e) {
    console.log("Phát hiện dữ liệu rác, hệ thống tự động reset bộ đếm khuyến mãi.");
  }

  let coThayDoi = false;
  for (let i = 0; i < danhSachKhuyenMai.length; i++) {
    let km = danhSachKhuyenMai[i];
    if (duLieuMoi[km.ma] === undefined) {
      duLieuMoi[km.ma] = km.soLuotMacDinh;
      coThayDoi = true;
    }
  }
  if (coThayDoi) localStorage.setItem("voucher_remains", JSON.stringify(duLieuMoi));
}

function laySoLuotConLai(maKhuyenMai) {
  try {
    let danhSachLuot = JSON.parse(localStorage.getItem("voucher_remains"));
    return danhSachLuot[maKhuyenMai] || 0;
  } catch (e) {
    return 0;
  }
}

function truLuotKhuyenMai(maKhuyenMai) {
  try {
    let danhSachLuot = JSON.parse(localStorage.getItem("voucher_remains"));
    if (!danhSachLuot[maKhuyenMai] || danhSachLuot[maKhuyenMai] <= 0) return false;
    danhSachLuot[maKhuyenMai]--;
    localStorage.setItem("voucher_remains", JSON.stringify(danhSachLuot));
    return true;
  } catch (e) {
    return false;
  }
}

/*=========================================================
    14. KIỂM TRA KHUYẾN MÃI
    =========================================================*/
function khuyenMaiConHan(km) {
  // Nếu chưa có ngày được chọn, hệ thống sẽ tạm thời coi như hợp lệ ĐỂ HIỂN THỊ LÊN MENU
  if (ngayDuocChon === "") {
    return true;
  }

  let ngayChieu = doiNgayThanhDate(ngayDuocChon);
  let ngayBatDau = doiNgayThanhDate(km.tuNgay);
  let ngayKetThuc = doiNgayThanhDate(km.denNgay);

  if (ngayChieu < ngayBatDau) return false;
  if (ngayChieu > ngayKetThuc) return false;

  return true;
}

function coQuyenDungKhuyenMai(km) {
  // Nếu mã áp dụng cho tất cả thì cho qua luôn
  for (let i = 0; i < km.apDungLoaiVe.length; i++) {
    if (km.apDungLoaiVe[i] === "tat-ca") {
      return true;
    }
  }

  // Nếu chưa chọn ghế nào thì cũng cho hiện mã lên menu trước
  if (danhSachGheDaChon.length === 0) {
    return true;
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
  // Kiểm tra hạn dùng
  if (khuyenMaiConHan(km) === false) return false;

  // Kiểm tra đối tượng vé
  if (coQuyenDungKhuyenMai(km) === false) return false;

  // Kiểm tra số lượt còn lại
  if (laySoLuotConLai(km.ma) <= 0) return false;

  return true;
}

/*=========================================================
    VẼ DANH SÁCH KHUYẾN MÃI 
  =========================================================*/
function veDanhSachKhuyenMai() {
  let khungDanhSach = document.getElementById("danh-sach-khuyen-mai");
  let oKhuyenMai = document.getElementById("khuyen-mai");
  let hienThiKhuyenMai = document.getElementById("hien-thi-khuyen-mai");

  if (!khungDanhSach || !oKhuyenMai || !hienThiKhuyenMai) return;

  let html = `<div class="dropdown-muc dang-chon" onclick="chonKhuyenMai('', 'Không áp dụng khuyến mãi', this)">Không áp dụng khuyến mãi</div>`;
  let coKhuyenMai = false;

  for (let i = 0; i < danhSachKhuyenMai.length; i++) {
    let km = danhSachKhuyenMai[i];
    if (khuyenMaiHopLe(km)) {
      coKhuyenMai = true;
      let tenHienThi = km.ten + " - còn " + laySoLuotConLai(km.ma) + " lượt";
      html += `<div class="dropdown-muc" onclick="chonKhuyenMai('${km.ma}', '${tenHienThi}', this)">${tenHienThi}</div>`;
    }
  }

  khungDanhSach.innerHTML = html;
  oKhuyenMai.value = "";
  hienThiKhuyenMai.innerText = "Không áp dụng khuyến mãi";

  let ghiChu = document.getElementById("ghi-chu-khuyen-mai");
  if (ngayDuocChon === "") ghiChu.innerText = "Chọn ngày chiếu để xem khuyến mãi phù hợp.";
  else if (coKhuyenMai) ghiChu.innerText = "Khuyến mãi đã được lọc theo ngày chiếu, loại vé và số lượt.";
  else ghiChu.innerText = "Không có khuyến mãi phù hợp với ngày chiếu hoặc loại vé này.";
}

function chonKhuyenMai(maKhuyenMai, tenKhuyenMai, theHTML) {
  document.getElementById("hien-thi-khuyen-mai").innerText = tenKhuyenMai;
  document.getElementById("khuyen-mai").value = maKhuyenMai;
  document.querySelectorAll("#danh-sach-khuyen-mai .dropdown-muc").forEach((muc) => muc.classList.remove("dang-chon"));
  theHTML.classList.add("dang-chon");
  document.getElementById("dropdown-khuyen-mai").classList.remove("mo");
  tinhLaiTongTien();
}

function layKhuyenMaiDangChon() {
  let ma = document.getElementById("khuyen-mai").value;
  return ma ? danhSachKhuyenMai.find((k) => k.ma === ma) || null : null;
}

/*=========================================================
    TÍNH TIỀN TỔNG
    =========================================================*/
function hienThiGheDaChon() {
  let oGhe = document.getElementById("chu-hien-thi-ghe");
  if (danhSachGheDaChon.length === 0) {
    oGhe.innerText = "Chưa chọn";
    return;
  }
  oGhe.innerText = danhSachGheDaChon.map((g) => `${g.tenGhe} (${layTenLoaiVe(g.loaiVe)})`).join(", ");
}

function hienThiKhuyenMai(km, ghiChu) {
  document.getElementById("chu-hien-thi-khuyen-mai").innerText = km === null ? "Không áp dụng" : km.ma;
  if (ghiChu !== "") document.getElementById("ghi-chu-khuyen-mai").innerText = ghiChu;
}

function hienThiTongTien() {
  let oTongTien = document.getElementById("chu-hien-thi-tong-tien");
  if (tienDuocGiam > 0) {
    oTongTien.innerHTML = `<span class="gia-goc">${tienGoc.toLocaleString("vi-VN")}đ</span> <span class="gia-giam">- ${tienDuocGiam.toLocaleString("vi-VN")}đ</span> ${tongTienVe.toLocaleString("vi-VN")}đ`;
  } else {
    oTongTien.innerText = tongTienVe.toLocaleString("vi-VN") + "đ";
  }
}

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
    if (laNgayCuoiTuan(ngayDuocChon)) giaCoBan = BANG_GIA_VE[ghe.loaiVe].cuoiTuan;
    /* Hàng A, B, C là ghế thường
    Hàng D là ghế VIP +20.000k
    Hàng E là ghế đôi x2 + 10k */
    let giaGhe = giaCoBan;

    if (ghe.tenGhe.startsWith("E")) {
      giaGhe = giaCoBan * 2 + PHU_THU_GHE_DOI;
    }

    if (ghe.tenGhe.startsWith("D")) {
      giaGhe = giaCoBan + PHU_THU_GHE_VIP;
    }
    tienGoc += giaGhe;
    danhSachGiaGhe.push(giaGhe);
  }

  let km = layKhuyenMaiDangChon();
  let ghiChu = "";

  if (km !== null && !khuyenMaiHopLe(km)) {
    hienThongBao("Khuyến mãi này không còn hợp lệ!");
    document.getElementById("khuyen-mai").value = "";
    document.getElementById("hien-thi-khuyen-mai").innerText = "Không áp dụng khuyến mãi";
    km = null;
  }

  if (km !== null) {
    if (km.loai === "giam-phan-tram") {
      tienDuocGiam = (tienGoc * km.phanTramGiam) / 100;
      ghiChu = `Đã giảm ${km.phanTramGiam}% tiền vé.`;
    }
    if (km.loai === "mien-phi-bap-nuoc") {
      uuDaiBapNuoc = true;
      ghiChu = "Ưu đãi này sẽ được áp dụng ở bước mua bắp nước.";
    }
    if (km.loai === "mua-2-tang-1") {
      if (danhSachGheDaChon.length >= 3) {
        danhSachGiaGhe.sort((a, b) => a - b);
        let soVeDuocTang = Math.floor(danhSachGheDaChon.length / 3);
        for (let i = 0; i < soVeDuocTang; i++) tienDuocGiam += danhSachGiaGhe[i];
        ghiChu = `Mua 2 tặng 1: miễn phí ${soVeDuocTang} vé rẻ nhất.`;
      } else {
        ghiChu = "Cần chọn ít nhất 3 ghế để dùng mã mua 2 tặng 1.";
      }
    }
  }

  tongTienVe = tienGoc - tienDuocGiam;
  hienThiKhuyenMai(km, ghiChu);
  hienThiTongTien();
}

/*=========================================================
    SANG TRANG BẮP NƯỚC
    =========================================================*/
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
    if (!truLuotKhuyenMai(km.ma)) {
      hienThongBao("Mã khuyến mãi đã hết lượt!");
      veDanhSachKhuyenMai();
      tinhLaiTongTien();
      return;
    }
    maKhuyenMai = km.ma;
    tenKhuyenMai = km.ten;
  }

  let donHang = {
    idPhim: phimHienTai ? phimHienTai.id : "",
    tenPhim: tenPhimHienTai,
    ngayChieu: ngayDuocChon,
    gioChieu: gioDuocChon,
    gheDaChon: danhSachGheDaChon.map((g) => g.tenGhe),
    chiTietVe: danhSachGheDaChon,
    loaiVe: [...new Set(danhSachGheDaChon.map((g) => g.loaiVe))].length === 1 ? layTenLoaiVe(danhSachGheDaChon[0].loaiVe) : "Nhiều loại vé",
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

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const khungNgay = document.getElementById("khung-ngay");
    if (!khungNgay) return;

    khungNgay.innerHTML = "";

    const today = new Date();
    const daysOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dd = String(date.getDate()).padStart(2, "0");
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const yyyy = date.getFullYear();

      const ngayChieu = `${dd}/${mm}/${yyyy}`;
      const tenNgay = i === 0 ? "Hôm nay" : daysOfWeek[date.getDay()];

      const btn = document.createElement("button");
      btn.className = "nut-ngay";
      btn.innerHTML = `${dd}-${mm}-${yyyy}<br><small>${tenNgay}</small>`;

      btn.onclick = function () {
        document.querySelectorAll("#khung-ngay .nut-ngay").forEach(function (nut) {
          nut.classList.remove("active", "dang-chon");
        });

        btn.classList.add("active", "dang-chon");

        ngayDuocChon = ngayChieu;

        if (phimHienTai && phimHienTai.suatChieu && phimHienTai.suatChieu[ngayChieu]) {
          renderDanhSachGio();
        }

        veDanhSachKhuyenMai();
        tinhLaiTongTien();

        let donHang = JSON.parse(localStorage.getItem("thongTinDonHang")) || {};
        donHang.ngayChieu = ngayChieu;
        localStorage.setItem("thongTinDonHang", JSON.stringify(donHang));
      };

      khungNgay.appendChild(btn);

      if (i === 0) {
        btn.click();
      }
    }
  }, 200);
});
