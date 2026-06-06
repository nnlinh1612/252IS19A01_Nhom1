const newsData = [
  {
    id: 1,
    type: "tintuc",
    title: "Lịch chiếu phim mới tháng 6",
    excerpt: "Hàng loạt bom tấn đổ bộ rạp Plant Cinema...",
    date: "28/05/2026",
    image: "../hinhanh/tintuc1.png",
  },
  {
    id: 2,
    type: "khuyenmai",
    title: "Khai trương rạp Plant Cinema - Ưu đãi khủng 30%",
    excerpt: "Nhân dịp khai trương, khách hàng được giảm 30% giá vé...",
    date: "20/05/2026",
    image: "../hinhanh/anh2.png",
    voucher: { code: "KHAITRUONG30", discount: "Giảm 30%" },
  },
  {
    id: 3,
    type: "khuyenmai",
    title: "Khuyến mãi Tết Thiếu Nhi 1/6",
    excerpt: "Miễn phí combo bắp nước cho vé trẻ em...",
    date: "01/06/2026",
    image: "../hinhanh/ctkm2.png",
    voucher: { code: "THIEUNHI_BAPNUOC", discount: "Miễn phí bắp nước" },
  },
  {
    id: 4,
    type: "khuyenmai",
    title: "Khuyến mãi đặc biệt dịp Trung Thu",
    excerpt: "Mua 2 tặng 1 và tặng lồng đèn cho các bé...",
    date: "22/09/2025",
    image: "../hinhanh/ctkm3.png",
    voucher: { code: "MOONFEST", discount: "Mua 2 tặng 1" },
  },
];

function getLatestNews() {
  const sorted = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  return sorted[0];
}

function updatePopupContent() {
  const latest = getLatestNews();
  if (!latest) return;

  const titleEl = document.getElementById("popup-title");
  const imageEl = document.getElementById("popup-image");
  const headingEl = document.getElementById("popup-heading");
  const descEl = document.getElementById("popup-description");
  const linkEl = document.getElementById("popup-link"); 

  if (titleEl) titleEl.innerHTML = latest.type === "khuyenmai" ? "KHUYẾN MÃI ĐẶC BIỆT" : "TIN TỨC MỚI NHẤT";
  if (imageEl) imageEl.src = latest.image;
  if (headingEl) headingEl.innerHTML = latest.title;
  if (descEl) {
    let desc = latest.excerpt;
    if (latest.voucher) {
      desc += `<br><br><strong style="color:#93e9be;">Mã: ${latest.voucher.code}</strong> - ${latest.voucher.discount}`;
    }
    descEl.innerHTML = desc;
  }
  if (linkEl) linkEl.href = `chitiet.html?id=${latest.id}`;
}

function showPopup() {
  updatePopupContent();
  const popup = document.getElementById("popupAds");
  if (popup) popup.classList.add("active");
}

function dongPopup() {
  const popup = document.getElementById("popupAds");
  if (popup) popup.classList.remove("active");
}

setTimeout(showPopup, 1000);

document.addEventListener("click", function (e) {
  const popup = document.getElementById("popupAds");
  if (e.target === popup) {
    dongPopup();
  }
});
