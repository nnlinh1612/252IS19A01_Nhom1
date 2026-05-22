if (!localStorage.getItem('cinema_users')) {
    localStorage.setItem('cinema_users', JSON.stringify([
        { id: 1, name: "Admin Plant", email: "admin@plant.com", phone: "0900000001", password: "123456" }
    ]));
}

if (!localStorage.getItem('cinema_tickets')) {
    localStorage.setItem('cinema_tickets', JSON.stringify([
        { id: "VE001234", email: "admin@plant.com", movie: "Mortal Kombat", date: "25/05/2026", time: "19:30", seats: ["A1", "A2"], combo: "Combo Bắp Nước", total: 210000 }
    ]));
}

let currentUser = null;

function kiemTraDangNhap() {
    const saved = sessionStorage.getItem('currentUser');
    if (saved) {
        currentUser = JSON.parse(saved);
        capNhatGiaoDien();
        hienThiVe();
    }
}

function capNhatGiaoDien() {
    const area = document.getElementById('taikhoanArea');
    if (area && currentUser) {
        area.innerHTML = `
            <div style="display: flex; gap: 15px; align-items: center;">
                <span style="color:#93e9be;">👤 ${currentUser.name}</span>
                <button class="nut-dang-xuat" style="background:transparent; border:1px solid #ff6b6b; color:#ff6b6b; padding:8px 20px; border-radius:30px; cursor:pointer;" onclick="dangXuat()">Đăng xuất</button>
            </div>
        `;
    } else {
        const btnDangNhap = document.querySelector('.nut-dang-nhap');
        const btnDangKy = document.querySelector('.nut-dang-ky');
        if (btnDangNhap) btnDangNhap.onclick = () => moModal('dangNhapModal');
        if (btnDangKy) btnDangKy.onclick = () => moModal('dangKyModal');
    }
}

function hienThiVe() {
    if (!currentUser) return;
    const allTickets = JSON.parse(localStorage.getItem('cinema_tickets'));
    const myTickets = allTickets.filter(t => t.email === currentUser.email);
    const veContainer = document.getElementById('veContainer');
    if (!veContainer) return;
    if (myTickets.length === 0) {
        veContainer.innerHTML = `<div class="taikhoan-ve-container"><h2>🎟️ VÉ CỦA TÔI</h2><div class="taikhoan-empty">Chưa có vé nào</div></div>`;
        return;
    }
    let html = `<div class="taikhoan-ve-container"><h2>🎟️ VÉ CỦA TÔI (${myTickets.length})</h2>`;
    myTickets.forEach(t => {
        html += `<div class="taikhoan-ve-item">
            <p><strong>Mã vé:</strong> ${t.id}</p>
            <p><strong>Phim:</strong> ${t.movie}</p>
            <p><strong>Ngày:</strong> ${t.date} - ${t.time}</p>
            <p><strong>Ghế:</strong> ${t.seats.join(', ')}</p>
            <p><strong>Combo:</strong> ${t.combo}</p>
            <p><strong>Tiền:</strong> ${t.total.toLocaleString()}đ</p>
        </div>`;
    });
    html += `</div>`;
    veContainer.innerHTML = html;
}

function dangKy() {
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPass').value.trim();
    document.getElementById('regError').innerText = '';
    document.getElementById('regSuccess').innerText = '';
    if (!name || !phone || !email || !pass) {
        document.getElementById('regError').innerText = 'Vui lòng nhập đầy đủ thông tin!';
        return;
    }
    const users = JSON.parse(localStorage.getItem('cinema_users'));
    if (users.find(u => u.email === email)) {
        document.getElementById('regError').innerText = 'Email đã tồn tại!';
        return;
    }
    users.push({ id: users.length + 1, name, phone, email, password: pass });
    localStorage.setItem('cinema_users', JSON.stringify(users));
    document.getElementById('regSuccess').innerText = '✅ Đăng ký thành công! Hãy đăng nhập.';
    setTimeout(() => {
        dongModal('dangKyModal');
        moModal('dangNhapModal');
    }, 1500);
}

function dangNhap() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    document.getElementById('loginError').innerText = '';
    if (!email || !pass) {
        document.getElementById('loginError').innerText = 'Vui lòng nhập email và mật khẩu!';
        return;
    }
    const users = JSON.parse(localStorage.getItem('cinema_users'));
    const user = users.find(u => u.email === email && u.password === pass);
    if (user) {
        currentUser = user;
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        dongModal('dangNhapModal');
        capNhatGiaoDien();
        hienThiVe();
    } else {
        document.getElementById('loginError').innerText = 'Sai email hoặc mật khẩu!';
    }
}

function dangXuat() {
    sessionStorage.removeItem('currentUser');
    location.reload();
}

function moModal(id) {
    document.getElementById(id).classList.add('active');
}

function dongModal(id) {
    document.getElementById(id).classList.remove('active');
}

window.onclick = function(e) {
    if (e.target.classList.contains('taikhoan-modal')) {
        e.target.classList.remove('active');
    }
}

kiemTraDangNhap();