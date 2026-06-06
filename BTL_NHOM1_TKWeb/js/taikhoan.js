if (!localStorage.getItem("cinema_users")) {
  localStorage.setItem(
    "cinema_users",
    JSON.stringify([
      { id: 1, name: "Admin Plant", email: "admin@plant.com", phone: "0900000001", password: "123456" },
      { id: 2, name: "Nguyễn Nhật Linh", email: "nnlinh1612@gmail.com", phone: "0987654321", password: "123456" },
      { id: 3, name: "Trịnh Thị Nhâm", email: "nhamtrinh507@gmail.com", phone: "0111222333", password: "123456" },
      { id: 4, name: "Ninh Phương Linh", email: "nplinh0315@gmail.com", phone: "0123456789", password: "123456" },
    ]),
  );
}

if (!localStorage.getItem("cinema_tickets")) {
  localStorage.setItem(
    "cinema_tickets",
    JSON.stringify([
      { id: "VE001234", email: "admin@plant.com", movie: "Mortal Kombat", date: "25/05/2026", time: "19:30", seats: ["A1", "A2"], combo: "Combo Bắp Nước", total: 210000 },
      { id: "VE002345", email: "admin@plant.com", movie: "Đại Tiệc Trăng Máu", date: "27/05/2026", time: "21:00", seats: ["C5"], combo: "Không", total: 80000 },
      { id: "VE003456", email: "user@example.com", movie: "Inside Out 2", date: "01/06/2026", time: "18:30", seats: ["B2", "B3"], combo: "Combo 2 người", total: 210000 },
    ]),
  );
}

let currentUser = null;

function kiemTraDangNhap() {
  const saved = sessionStorage.getItem("currentUser");
  if (saved) {
    currentUser = JSON.parse(saved);
    capNhatGiaoDien();
  }
}

function capNhatGiaoDien() {
  const area = document.getElementById("taikhoanArea");
  if (area && currentUser) {
    area.innerHTML = `
            <div style="display: flex; gap: 15px; align-items: center;">
                <a href="vecuatoi.html" style="color:#93e9be; text-decoration:none; display:flex; align-items:center; gap:5px;">
                     ${currentUser.name}
                </a>
                <button class="nut-dang-xuat" style="background:transparent; border:1px solid #ff6b6b; color:#ff6b6b; padding:8px 20px; border-radius:30px; cursor:pointer;" onclick="dangXuat()">Đăng xuất</button>
            </div>
        `;
  } else {
    const btnDangNhap = document.querySelector(".nut-dang-nhap");
    const btnDangKy = document.querySelector(".nut-dang-ky");
    if (btnDangNhap) btnDangNhap.onclick = () => moModal("dangNhapModal");
    if (btnDangKy) btnDangKy.onclick = () => moModal("dangKyModal");
  }
}

function dangKy() {
  const name = document.getElementById("regName").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPass").value.trim();
  document.getElementById("regError").innerText = "";
  document.getElementById("regSuccess").innerText = "";
  if (!name || !phone || !email || !pass) {
    document.getElementById("regError").innerText = "Vui lòng nhập đầy đủ thông tin!";
    return;
  }
  const users = JSON.parse(localStorage.getItem("cinema_users"));
  if (users.find((u) => u.email === email)) {
    document.getElementById("regError").innerText = "Email đã tồn tại!";
    return;
  }
  users.push({ id: users.length + 1, name, phone, email, password: pass });
  localStorage.setItem("cinema_users", JSON.stringify(users));
  document.getElementById("regSuccess").innerText = "✅ Đăng ký thành công! Hãy đăng nhập.";
  setTimeout(() => {
    dongModal("dangKyModal");
    moModal("dangNhapModal");
  }, 1500);
}

function dangNhap() {
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  document.getElementById("loginError").innerText = "";
  if (!email || !pass) {
    document.getElementById("loginError").innerText = "Vui lòng nhập email và mật khẩu!";
    return;
  }
  const users = JSON.parse(localStorage.getItem("cinema_users"));
  const user = users.find((u) => u.email === email && u.password === pass);
  if (user) {
    currentUser = user;
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    dongModal("dangNhapModal");
    capNhatGiaoDien();
  } else {
    document.getElementById("loginError").innerText = "Sai email hoặc mật khẩu!";
  }
}

function dangXuat() {
  sessionStorage.removeItem("currentUser");
  location.reload();
}

function moModal(id) {
  document.getElementById(id).classList.add("active");
}

function dongModal(id) {
  document.getElementById(id).classList.remove("active");
}

window.onclick = function (e) {
  if (e.target.classList.contains("taikhoan-modal")) {
    e.target.classList.remove("active");
  }
};

kiemTraDangNhap();

// Hàm xử lý quên mật khẩu (gọi từ modal quên mật khẩu)
function xuLyQuenMatKhau() {
    const email = document.getElementById('resetEmail').value.trim();
    
    const resetError = document.getElementById('resetError');
    const resetSuccess = document.getElementById('resetSuccess');
    
    if (resetError) resetError.innerText = '';
    if (resetSuccess) resetSuccess.innerText = '';
    
    if (!email) {
        if (resetError) resetError.innerText = '⚠️ Vui lòng nhập email!';
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('cinema_users') || '[]');
    const user = users.find(u => u.email === email);
    
    if (!user) {
        if (resetError) resetError.innerText = '❌ Email không tồn tại trong hệ thống!';
        return;
    }
    
    // Tạo mật khẩu ngẫu nhiên
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
    let matKhauMoi = '';
    for (let i = 0; i < 8; i++) {
        matKhauMoi += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    user.password = matKhauMoi;
    localStorage.setItem('cinema_users', JSON.stringify(users));
    
    // Gửi email
    const thamSo = {
        to_email: email,
        customer_name: user.name,
        new_password: matKhauMoi
    };
    
    if (typeof emailjs !== 'undefined') {
        emailjs.send("service_0m2wfrd", "template_a4b5vsp", thamSo)
            .then(() => {
                if (resetSuccess) resetSuccess.innerHTML = '✅ Mật khẩu mới đã được gửi về email!';
                setTimeout(() => {
                    dongModal('quenMatKhauModal');
                    moModal('dangNhapModal');
                    if (document.getElementById('resetEmail')) document.getElementById('resetEmail').value = '';
                }, 2000);
            })
            .catch((error) => {
                console.error("Lỗi gửi email:", error);
                if (resetError) resetError.innerHTML = `⚠️ Mật khẩu mới: ${matKhauMoi}`;
                setTimeout(() => {
                    dongModal('quenMatKhauModal');
                    moModal('dangNhapModal');
                }, 3000);
            });
    } else {
        // Fallback nếu không có EmailJS
        alert(`🔐 Mật khẩu mới của bạn là: ${matKhauMoi}\n\nVui lòng đăng nhập lại!`);
        dongModal('quenMatKhauModal');
        moModal('dangNhapModal');
    }
}
