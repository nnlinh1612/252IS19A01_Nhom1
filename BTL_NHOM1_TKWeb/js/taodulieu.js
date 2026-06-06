function khoiTaoDuLieuVeAo() {
  // Nếu đã tạo bộ dữ liệu rồi thì mới dừng
  if (localStorage.getItem("daTaoDataVeAoXin")) {
    return;
  }

  // XXóa sạch vé cũ từ trước
  localStorage.removeItem("cinema_tickets");

  // Danh sách email các thành viên
  const danhSachEmail = ["admin@plant.com", "nlinh1612@gmail.com", "nhamtrinh507@gmail.com", "nplinh0315@gmail.com"];

  // Lọc lấy những phim ĐANG CHIẾU từ khoPhim
  const phimDangChieu = khoPhim.filter((p) => p.trangThai === "dang-chieu");
  let danhSachVeAo = [];

  // Tạo vé ngẫu nhiên cho từng email
  danhSachEmail.forEach((email) => {
    // Mỗi người cho đặt từ 4 đến 6 vé cho hoành tráng
    let soLuongVe = Math.floor(Math.random() * 3) + 4;

    for (let i = 0; i < soLuongVe; i++) {
      // Bốc ngẫu nhiên 1 phim đang chiếu
      const phimRandom = phimDangChieu[Math.floor(Math.random() * phimDangChieu.length)];

      // Bốc ngẫu nhiên ngày chiếu có sẵn của phim đó
      const cacNgayChieu = Object.keys(phimRandom.suatChieu);
      if (cacNgayChieu.length === 0) continue;
      const ngayRandom = cacNgayChieu[Math.floor(Math.random() * cacNgayChieu.length)];

      // Bốc ngẫu nhiên giờ chiếu trong ngày đó
      const cacGioChieu = phimRandom.suatChieu[ngayRandom];
      const gioRandom = cacGioChieu[Math.floor(Math.random() * cacGioChieu.length)];

      // Tạo mã ghế ngẫu nhiên (VD: F5, G2)
      const ghe1 = String.fromCharCode(65 + Math.floor(Math.random() * 5)) + (Math.floor(Math.random() * 8) + 1);
      const ghe2 = String.fromCharCode(65 + Math.floor(Math.random() * 5)) + (Math.floor(Math.random() * 8) + 1);

      // Cấu trúc 1 chiếc vé hoàn chỉnh
      const ve = {
        id: "PL-" + Math.floor(Math.random() * 90000 + 10000),
        email: email,
        movie: phimRandom.ten,
        genre: phimRandom.theLoai,
        date: ngayRandom,
        time: gioRandom,
        seats: [ghe1, ghe2],
        combo: Math.random() > 0.5 ? "1x Combo 1" : "Không",
        total: Math.floor(Math.random() * 150000) + 120000,
      };
      danhSachVeAo.push(ve);
    }
  });

  // Lưu toàn bộ vé vừa tạo vào LocalStorage
  localStorage.setItem("cinema_tickets", JSON.stringify(danhSachVeAo));

  // Đánh dấu đã tạo data để không bị đè
  localStorage.setItem("daTaoDataVeAoXin", "thanh_cong");

  console.log("Đã dọn dẹp vé cũ và tạo thành công " + danhSachVeAo.length + " vé xem phim ảo!");
}

// Chạy hàm này ngay khi load trang
khoiTaoDuLieuVeAo();
