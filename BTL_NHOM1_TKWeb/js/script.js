// Kho dữ liệu phim mẫu chuẩn rạp
const khoPhim = [
  {
    id: 1,
    ten: "Doraemon Movie 45: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh",
    trangThai: "dang-chieu",
    theLoai: "Hoạt Hình, Giả Tưởng, Phiêu Lưu",
    thoiLuong: "102 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "P",
    diem: "9.0",
    poster: "../hinhanh/Poster1.jpg",
    moTa: "Bước vào kì nghỉ hè, Nobita và các bạn tranh cãi chí chóe về địa điểm cắm trại. Theo đề xuất của Doraemon, cả nhóm quyết định cắm trại giữa lòng đại dương! Sử dụng bảo bối thần kì xe Buggy chạy dưới nước và đèn pin thích nghi, 5 bạn nhỏ tận hưởng chuyến phiêu lưu kỳ thú...",
    trailer: "../hinhanh/Trailer1.mp4",
    suatChieu: {
      "22/05/2026": ["09:00", "13:30", "16:45"],
      "23/05/2026": ["10:15", "14:30", "19:00", "21:30"],
      "30/05/2026": ["08:30", "15:00", "20:30"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["08:30", "15:00", "20:30"],
    },
  },
  {
    id: 2,
    ten: "Shin Cậu Bé Bút Chì: Vương Quốc Nguệch Ngoạc Và Bốn Dũng Sĩ Bất Ổn",
    trangThai: "dang-chieu",
    theLoai: "Hoạt Hình, Hài",
    thoiLuong: "105 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "P",
    diem: "9.7",
    poster: "../hinhanh/Poster2.jpg",
    moTa: "Bộ phim xoay quanh một vương quốc lơ lửng mang tên Rakuga, tồn tại nhờ nguồn năng lượng đến từ những nét vẽ của con người. Nhưng khi thế giới loài người dần đánh mất sự sáng tạo, Rakuga đứng bên bờ sụp đổ.",
    trailer: "../hinhanh/Trailer2.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "30/05/2026": ["08:30", "15:00", "20:30"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "11/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
    },
  },
  {
    id: 3,
    ten: "Super Mario Thiên Hà",
    theLoai: "Hoạt Hình, Phiêu Lưu, Hài, Hành Động",
    trangThai: "dang-chieu",
    thoiLuong: "99 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "P",
    diem: "8.1",
    poster: "../hinhanh/Poster3.jpg",
    moTa: "Phim Super Mario Thiên hà là một bộ phim hoạt hình máy tính phiêu lưu hài hước của Hoa Kỳ dựa trên trò chơi điện tử Super Mario Galaxy năm 2007 và loạt trò chơi điện tử Mario của Nintendo.",
    trailer: "../hinhanh/Trailer3.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["19:30", "22:45"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
    },
  },
  {
    id: 4,
    ten: "Mèo Siêu Quậy Ở Viện Bảo Tàng",
    trangThai: "dang-chieu",
    theLoai: "Hoạt Hình, Phiêu Lưu, Hài",
    thoiLuong: "112 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "P",
    diem: "8.3",
    poster: "../hinhanh/Poster4.jpg",
    moTa: "Phim kể về Vincent, một chú mèo lông vàng, và Maurice, một chú chuột, cùng với những chú mèo khác hợp tác để bảo vệ các tác phẩm nghệ thuật trong Bảo tàng Hermitage.",
    trailer: "../hinhanh/Trailer4.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["19:30", "22:45"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "30/05/2026": ["19:30", "22:45"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["19:30", "22:45"],
    },
  },
  {
    id: 5,
    ten: "Đội Thám Tử Cừu",
    trangThai: "dang-chieu",
    theLoai: "Hài, Thần Bí",
    thoiLuong: "110 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "P",
    diem: "7.3",
    poster: "../hinhanh/Poster5.jpg",
    moTa: "Đội Thám Tử Cừu là một bộ phim hài bí ẩn năm 2026 do Kyle Balda đạo diễn và Craig Mazin viết kịch bản, dựa trên tiểu thuyết Ba Chiếc Túi Đầy năm 2005 của Leonie Swann.",
    trailer: "../hinhanh/Trailer5.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "30/05/2026": ["19:30", "22:45"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["19:30", "22:45"],
    },
  },
  {
    id: 6,
    ten: "Tạm Biệt Gohan",
    trangThai: "dang-chieu",
    theLoai: "Tâm Lý, Tình Cảm Gia Đình",
    thoiLuong: "141 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "K",
    diem: "8.5",
    poster: "../hinhanh/Poster6.jpg",
    moTa: "Câu chuyện kể về một chú chó hoang màu trắng có mũi hồng tên là Gohan, cuộc đời của chú trải qua ba giai đoạn khác nhau. Trong suốt hành trình của mình, chú luôn khao khát một nơi để gọi là nhà và một người chủ có thể cho chú tình yêu thương và sự ấm áp.",
    trailer: "../hinhanh/Trailer6.mp4",
    suatChieu: {
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["19:30", "22:45"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "30/05/2026": ["19:30", "22:45"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "05/06/2026": ["08:30", "15:00", "20:30"],
      "06/06/2026": ["08:30", "15:00", "20:30"],
      "11/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["19:30", "22:45"],
    },
  },
  {
    id: 7,
    ten: "Thoát Khỏi Tận Thế",
    trangThai: "dang-chieu",
    theLoai: "Phiêu Lưu, Khoa Học Viễn Tưởng",
    thoiLuong: "156 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "K",
    diem: "7.0",
    poster: "../hinhanh/Poster7.jpg",
    moTa: "Ryland Grace tỉnh dậy sau cơn hôn mê trên một con tàu vũ trụ. Ban đầu, anh có những biểu hiện bất thường và bị mất trí nhớ ngược dòng. Grace phát hiện rằng anh là người sống sót duy nhất trong số ba thành viên phi hành đoàn trên tàu và anh đang ở cách Trái Đất hàng năm ánh sáng trong một Hệ Mặt Trời xa xôi.",
    trailer: "../hinhanh/Trailer7.mp4",
    suatChieu: {
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "30/05/2026": ["19:30", "22:45"],
      "01/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "02/06/2026": ["08:30", "15:00", "20:30"],
      "03/06/2026": ["08:30", "15:00", "20:30"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "05/06/2026": ["08:30", "15:00", "20:30"],
      "06/06/2026": ["08:30", "15:00", "20:30"],
      "11/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["19:30", "22:45"],
    },
  },
  {
    id: 8,
    ten: "Michael",
    trangThai: "dang-chieu",
    theLoai: "Ca Nhạc, Chính Kịch",
    thoiLuong: "127 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "K",
    diem: "9.0",
    poster: "../hinhanh/Poster8.jpg",
    moTa: "Michael là bộ phim điện ảnh tiểu sử – chính kịch ca nhạc của Mỹ ra mắt năm 2026, do Antoine Fuqua đạo diễn và John Logan chắp bút kịch bản.",
    trailer: "../hinhanh/Trailer8.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "23/05/2026": ["18:15", "21:00", "23:25"],
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["18:15", "21:00", "23:25"],
      "30/05/2026": ["19:30", "22:45"],
      "01/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "02/06/2026": ["08:30", "15:00", "20:30"],
      "03/06/2026": ["08:30", "15:00", "20:30"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "05/06/2026": ["08:30", "15:00", "20:30"],
      "06/06/2026": ["08:30", "15:00", "20:30"],
      "11/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["19:30", "22:45"],
    },
  },
  {
    id: 9,
    ten: "Trùm Sò",
    trangThai: "dang-chieu",
    theLoai: "Hài, Cổ Trang, Dân Gian",
    thoiLuong: "105 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "K",
    diem: "6.9",
    poster: "../hinhanh/Poster9.jpg",
    moTa: "Trùm Sò (đạo diễn Đức Thịnh) là bộ phim hài chiếu rạp lấy cảm hứng từ điển tích dân gian Ngao – Sò – Ốc – Hến. Tác phẩm xoay quanh một nhân vật cực kỳ ke kiệt nhưng vô tình bị cuốn vào một vụ cướp bất đắc dĩ tại một ngôi làng nghèo.",
    trailer: "../hinhanh/Trailer9.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "23/05/2026": ["18:15", "21:00", "23:25"],
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["18:15", "21:00", "23:25"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "31/05/2026": ["19:30", "22:45"],
      "01/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "02/06/2026": ["08:30", "15:00", "20:30"],
      "03/06/2026": ["08:30", "15:00", "20:30"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "09/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["19:30", "22:45"],
    },
  },
  {
    id: 10,
    ten: "Dưới Bóng Điện Hạ",
    trangThai: "dang-chieu",
    theLoai: "Tâm Lý, Cổ Trang, Lịch Sử",
    thoiLuong: "117 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T16",
    diem: "8.8",
    poster: "../hinhanh/Poster10.jpg",
    moTa: "Năm 1457 dưới triều đại Joseon. Vua Danjong (Park Ji-hoon đóng) lên ngôi từ năm 12 tuổi nhưng nhanh chóng bị chính người chú ruột truất ngôi và đày đến vùng lưu đày Cheongnyeongpo hẻo lánh.",
    trailer: "../hinhanh/Trailer10.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "23/05/2026": ["18:15", "21:00", "23:25"],
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "27/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["18:15", "21:00", "23:25"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "31/05/2026": ["19:30", "22:45"],
      "01/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "02/06/2026": ["08:30", "15:00", "20:30"],
      "03/06/2026": ["08:30", "15:00", "20:30"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "09/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["19:30", "22:45"],
    },
  },
  {
    id: 11,
    ten: "Phí Phông",
    trangThai: "dang-chieu",
    theLoai: "Kinh Dị, Tâm Linh",
    thoiLuong: "125 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T16",
    diem: "8.0",
    poster: "../hinhanh/Poster11.jpg",
    moTa: "Theo chân hai anh em pháp sư là Còn và Dương trên hành trình trở lại bản làng để cứu mẹ. Bà đã bị cuốn vào lời nguyền đáng sợ liên quan đến Phí Phông – một thực thể có hình hài giống con người, ban đêm có khả năng tách đầu và biến đổi để đi săn mồi, hút máu.",
    trailer: "../hinhanh/Trailer11.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "28/05/2026": ["18:15", "21:00", "23:25"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "31/05/2026": ["19:30", "22:45"],
      "01/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "02/06/2026": ["08:30", "15:00", "20:30"],
      "03/06/2026": ["08:30", "15:00", "20:30"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "09/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["19:30", "22:45"],
    },
  },
  {
    id: 12,
    ten: "Bài Trùng Phá Án",
    trangThai: "dang-chieu",
    theLoai: "Trinh Thám, Hành Động, Hài",
    thoiLuong: "120 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T16",
    diem: "7.3",
    poster: "../hinhanh/Poster12.jpg",
    moTa: "Câu chuyện bắt đầu tại một thị trấn nhỏ khi cựu cảnh sát trọng án Jae-hyuk bị ép buộc hợp tác cùng tân binh Joong-ho để điều tra một vụ trộm cắp vặt. Tưởng chừng chỉ là một vụ án nhỏ, cả hai vô tình phát hiện hàng loạt manh mối chưa từng được tiết lộ, dẫn họ đến một vụ án mạng kinh hoàng ở Seoul đã khép hồ sơ từ lâu. Bất chấp sự cản trở từ cảnh sát khu vực Gangnam, bộ đôi bất đắc dĩ này quyết tâm hợp sức vén màn sự thật, truy tìm hung thủ thực sự đứng sau.",
    trailer: "../hinhanh/Trailer12.mp4",
    suatChieu: {
      "22/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["19:30", "22:45"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
    },
  },
  {
    id: 13,
    ten: "Một Thời Ta Đã Yêu",
    trangThai: "dang-chieu",
    theLoai: "Tâm Lý, Tình Cảm, Lãng Mạn",
    thoiLuong: "115 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T16",
    diem: "5.3",
    poster: "../hinhanh/Poster13.jpg",
    moTa: "Lấy bối cảnh năm 2006 tại một thị trấn biển ở Phú Yên, Bảo (18 tuổi) chuẩn bị bước vào đời thì gặp Quỳnh – một người phụ nữ sắc sảo, từng trải vừa chuyển về sống trong xóm. Cảm xúc yêu đương cuồng nhiệt, đơn phương của chàng trai trẻ dành cho Quỳnh đã phá vỡ quỹ đạo cuộc đời cậu.",
    trailer: "../hinhanh/Trailer13.mp4",
    suatChieu: {
      "23/05/2026": ["18:15", "21:00", "23:25"],
      "24/05/2026": ["19:30", "22:45"],
      "23/05/2026": ["18:15", "21:00", "23:25"],
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "27/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["19:30", "22:45"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
    },
  },
  {
    id: 14,
    ten: "Hồ Nuốt Người",
    trangThai: "dang-chieu",
    theLoai: "Kinh Dị, Giật Gân",
    thoiLuong: "146 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T18",
    diem: "8.4",
    poster: "../hinhanh/Poster14.jpg",
    moTa: "Nữ PD kỳ cựu Su-in (Kim Hye-yoon thủ vai) dẫn đầu đoàn làm phim đến hồ nước Salmokji hẻo lánh để ghi hình bổ sung. Tuy nhiên, cô nhanh chóng có dự cảm bất an và nhận ra có một thế lực ma quái đang ẩn nấp.",
    trailer: "../hinhanh/Trailer14.mp4",
    suatChieu: {
      "23/05/2026": ["18:15", "21:00", "23:25"],
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "27/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["19:30", "22:45"],
      "02/06/2026": ["19:30", "22:45"],
      "03/06/2026": ["18:15", "21:00", "23:25"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "11/06/2026": ["08:30", "15:00", "20:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["08:30", "15:00", "20:30"],
      "14/06/2026": ["08:30", "15:00", "20:30"],
      "15/06/2026": ["10:15", "14:30", "19:00", "21:30"],
    },
  },
  {
    id: 15,
    ten: "Xác Ướp",
    trangThai: "dang-chieu",
    theLoai: "Kinh Dị, Siêu Nhiên",
    thoiLuong: "151 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T18",
    diem: "8.1",
    poster: "../hinhanh/Poster15.jpg",
    moTa: "Tám năm trước, cô con gái nhỏ của một cặp vợ chồng đã biến mất không dấu vết trong sa mạc.",
    trailer: "../hinhanh/Trailer15.mp4",
    suatChieu: {
      "23/05/2026": ["18:15", "21:00", "23:25"],
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "27/05/2026": ["18:15", "21:00", "23:25"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "31/05/2026": ["19:30", "22:45"],
      "02/06/2026": ["19:30", "22:45"],
      "03/06/2026": ["18:15", "21:00", "23:25"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "11/06/2026": ["08:30", "15:00", "20:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["08:30", "15:00", "20:30"],
      "14/06/2026": ["08:30", "15:00", "20:30"],
      "15/06/2026": ["10:15", "14:30", "19:00", "21:30"],
    },
  },
  {
    id: 16,
    ten: "Làng Khát Máu",
    trangThai: "dang-chieu",
    theLoai: "Kinh Dị, Trinh Thám, Tâm Linh",
    thoiLuong: "136 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T18",
    diem: "7.3",
    poster: "../hinhanh/Poster16.jpg",
    moTa: "Câu chuyện bắt đầu khi một biên tập viên tạp chí chuyên điều tra về các hiện tượng kỳ bí đột ngột mất tích. Để tìm kiếm đồng nghiệp, nam phóng viên trẻ Ozawa Yūki (Eiji Akaso thủ vai) và một nhà báo đã quyết định dấn thân vào cuộc điều tra.",
    trailer: "../hinhanh/Trailer16.mp4",
    suatChieu: {
      "23/05/2026": ["18:15", "21:00", "23:25"],
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["18:15", "21:00", "23:25"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "31/05/2026": ["19:30", "22:45"],
      "02/06/2026": ["19:30", "22:45"],
      "03/06/2026": ["18:15", "21:00", "23:25"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "11/06/2026": ["08:30", "15:00", "20:30"],
      "12/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "13/06/2026": ["08:30", "15:00", "20:30"],
      "14/06/2026": ["08:30", "15:00", "20:30"],
      "15/06/2026": ["10:15", "14:30", "19:00", "21:30"],
    },
  },
  {
    id: 17,
    ten: "Làng Trùng Tang",
    trangThai: "dang-chieu",
    theLoai: "Kinh Dị, Tâm Linh",
    thoiLuong: "140 phsut",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T18",
    diem: "7.3",
    poster: "../hinhanh/Poster17.jpg",
    moTa: "Cậu học sinh nghèo Jaya liên tục bị Darma (con trai trưởng làng quyền lực) bắt nạt tàn bạo. Sự việc bị nhà trường và hiệu trưởng phớt lờ để che đậy danh tiếng.",
    trailer: "../hinhanh/Trailer17.mp4",
    suatChieu: {
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "26/05/2026": ["18:15", "21:00", "23:25"],
      "28/05/2026": ["18:15", "21:00", "23:25"],
      "29/05/2026": ["18:15", "21:00", "23:25"],
      "31/05/2026": ["19:30", "22:45"],
      "02/06/2026": ["19:30", "22:45"],
      "03/06/2026": ["18:15", "21:00", "23:25"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "11/06/2026": ["08:30", "15:00", "20:30"],
      "14/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "15/06/2026": ["08:30", "15:00", "20:30"],
      "17/06/2026": ["08:30", "15:00", "20:30"],
      "18/06/2026": ["10:15", "14:30", "19:00", "21:30"],
    },
  },
  {
    id: 18,
    ten: "Hào Quang Đơn Độc",
    trangThai: "dang-chieu",
    theLoai: "Tâm Lý, Giật Gân",
    thoiLuong: "125 phút",
    khoiChieu: "22/05/2026",
    nhanTuoi: "T18",
    diem: "7.3",
    poster: "../hinhanh/Poster18.jpg",
    moTa: "Sau một tai nạn bí ẩn ngay trên sân khấu và phải hủy lưu diễn, nữ ca sĩ (Anne Hathaway) chuẩn bị cho sự kiện tái xuất lớn nhất sự nghiệp.",
    trailer: "../hinhanh/Trailer18.mp4",
    suatChieu: {
      "25/05/2026": ["18:15", "21:00", "23:25"],
      "27/05/2026": ["18:15", "21:00", "23:25"],
      "30/05/2026": ["19:30", "22:45"],
      "31/05/2026": ["19:30", "22:45"],
      "02/06/2026": ["19:30", "22:45"],
      "03/06/2026": ["18:15", "21:00", "23:25"],
      "04/06/2026": ["08:30", "15:00", "20:30"],
      "07/06/2026": ["08:30", "15:00", "20:30"],
      "08/06/2026": ["08:30", "15:00", "20:30"],
      "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "11/06/2026": ["08:30", "15:00", "20:30"],
      "14/06/2026": ["10:15", "14:30", "19:00", "21:30"],
      "15/06/2026": ["08:30", "15:00", "20:30"],
      "17/06/2026": ["08:30", "15:00", "20:30"],
    },
  },
  {
    id: 19,
    ten: "Madames Thanh Sắc",
    trangThai: "sap-chieu",
    theLoai: "Tâm lý, Tội Phạm",
    thoiLuong: "100 phút",
    ngayKhoiChieu: "19/06/2026",
    nhanTuoi: "T18",
    diem: "",
    poster: "../hinhanh/posterSC1.png",
    moTa: "Madames Thanh Sắc xoay quanh cuộc đời của đại mỹ nhân Cầm Thanh (Thanh Hằng) và Madame Sắc (Hồng Ánh) - bà chủ vũ trường Kim Đô vô cùng giàu có và sở hữu nhiều kim cương. Dù ở dưới trướng của bà Sắc và từng bước trở thành vũ nữ đình đám nhất Sài Gòn những năm 1960, nhưng Cầm Thanh luôn muốn nổi loạn. Từ đó, hai người phụ nữ bắt đầu cuộc giằng co căng thẳng dẫn đến những sự kiện gây rúng động.",
    trailer: "../hinhanh/TrailerSC1.mp4",
  },
  {
    id: 20,
    ten: "Cầu Chú Hỏa",
    trangThai: "sap-chieu",
    theLoai: "Kinh Dị, Tâm Linh",
    thoiLuong: "100 phút",
    ngayKhoiChieu: "12/06/2026",
    nhanTuoi: "T18",
    diem: "",
    poster: "../hinhanh/posterSC2.jpg",
    moTa: "Để câu view, một nhóm streamer livestream khám phá Lầu Chú Hỏa, dinh thự bỏ hoang gắn với truyền thuyết về con ma nhà họ Hứa. Nhưng ngay từ những phút đầu, mọi thứ đã vượt khỏi tầm kiểm soát. Hiện tượng siêu nhiên liên tiếp xảy ra, kéo cả nhóm vào vòng xoáy ám ảnh không lối thoát. Buổi livestream nhanh chóng biến thành nơi “tạo nghiệp – trả nghiệp”, khi từng người phải trả giá cho lòng tham và sự báng bổ trước linh hồn oan khuất của cô tiểu thư họ Hứa.",
    trailer: "../hinhanh/TrailerSC2.mp4",
  },
  {
    id: 21,
    ten: "Câu Chuyện Đồ Chơi 5",
    trangThai: "sap-chieu",
    theLoai: "Hoạt Hình, Phiêu Lưu",
    thoiLuong: "102 phút",
    ngayKhoiChieu: "19/06/2026",
    nhanTuoi: "P",
    diem: "",
    poster: "../hinhanh/posterSC3.jpg",
    moTa: "Các món đồ chơi đã trở lại trong Toy Story 5 của Disney và Pixar, và lần này sẽ là cuộc đối đầu giữa đồ chơi và công nghệ. Buzz, Woody, Jessie cùng cả nhóm sẽ phải đối mặt với thử thách khó khăn hơn gấp bội khi chạm trán một mối đe dọa hoàn toàn mới đối với niềm vui vui chơi. Bộ phim được đạo diễn bởi Andrew Stanton, đồng đạo diễn bởi Kenna Harris và sản xuất bởi Lindsey Collins. Toy Story 5 sẽ khởi chiếu tại rạp vào ngày 19 tháng 6 năm 2026.",
    trailer: "../hinhanh/TrailerSC3.mp4",
  },
];

// =================================================================
// BIẾN TOÀN CỤC (QUẢN LÝ TRẠNG THÁI)
// =================================================================
let ngayHienTai = null;
let tabLichChieuHienTai = "dang-chieu";

// =================================================================
// 1. HÀM HIỂN THỊ PHIM ĐANG CHIẾU TRANG CHỦ (GIỚI HẠN 8 PHIM)
// =================================================================
function renderDanhSachTrangChu() {
  const vungTrangChu = document.getElementById("danh-sach-phim-trang-chu");
  if (!vungTrangChu) return;
  vungTrangChu.innerHTML = "";

  // Chỉ lấy phim ĐANG CHIẾU
  const phimDangChieu = khoPhim.filter((p) => p.trangThai === "dang-chieu").slice(0, 8);

  phimDangChieu.forEach((phim) => {
    const classNhan = phim.nhanTuoi === "P" ? "nhan-tuoi nhan-p" : "nhan-tuoi";
    const htmlPhim = `
            <div class="col-6 col-md-4 col-lg-3 d-flex mb-4">
                <div class="the-phim-home d-flex flex-column w-100">
                    <div class="khung-anh-home">
                        <img src="${phim.poster}" alt="${phim.ten}">
                        <div class="lop-phu-home">
                            <button class="nut-xem-chi-tiet" onclick="window.location.href='Lichchieu.html?id=${phim.id}&from=home'">Chi tiết</button>
                        </div>
                    </div>
                    <div class="mt-3 d-flex flex-column flex-grow-1 justify-content-between">
                        <div>
                            <h4 class="tieu-de-phim-home">${phim.ten}</h4>
<p class="the-loai-phim-home">${phim.theLoai}</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-2 px-1">
                            <span class="text-warning small">★ ${phim.diem}</span>
                            <span class="${classNhan}" style="font-size: 11px; padding: 2px 6px;">${phim.nhanTuoi}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    vungTrangChu.innerHTML += htmlPhim;
  });
}

// =================================================================
// 2. HÀM HIỂN THỊ PHIM SẮP CHIẾU TRANG CHỦ (GIỚI HẠN 8 PHIM)
// =================================================================
function renderDanhSachSapChieuTrangChu() {
  const vungSapChieu = document.getElementById("danh-sach-phim-sap-chieu-trang-chu");
  if (!vungSapChieu) return;
  vungSapChieu.innerHTML = "";

  // Chỉ lấy phim SẮP CHIẾU
  const phimSapChieu = khoPhim.filter((p) => p.trangThai === "sap-chieu").slice(0, 8);

  phimSapChieu.forEach((phim) => {
    const classNhan = phim.nhanTuoi === "P" ? "nhan-tuoi nhan-p" : "nhan-tuoi";
    const htmlPhim = `
            <div class="col-6 col-md-4 col-lg-3 d-flex mb-4">
                <div class="the-phim-home d-flex flex-column w-100">
                    <div class="khung-anh-home">
                        <img src="${phim.poster}" alt="${phim.ten}">
                        <div class="lop-phu-home">
                            <button class="nut-xem-chi-tiet" onclick="window.location.href='Lichchieu.html?id=${phim.id}&from=home'">Xem Trailer</button>
                        </div>
                    </div>
                    <div class="mt-3 d-flex flex-column flex-grow-1 justify-content-between">
                        <div>
                            <h4 class="tieu-de-phim-home">${phim.ten}</h4>
                            <p class="text-center mb-1 fw-bold" style="font-size: 13px; color: var(--mau-chu-dao);">Khởi chiếu: ${phim.ngayKhoiChieu}</p>
                        </div>
                        <div class="d-flex justify-content-center align-items-center mt-2 gap-2 px-1">
                            <span class="text-secondary small" style="font-size: 11px;">${phim.theLoai}</span>
                            <span class="${classNhan}" style="font-size: 11px; padding: 2px 6px;">${phim.nhanTuoi}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    vungSapChieu.innerHTML += htmlPhim;
  });
}

// =================================================================
// 3. HÀM HIỂN THỊ DANH SÁCH BÊN TRANG LỊCH CHIẾU (CHUNG CẢ 2 TAB)
// =================================================================
function renderDanhSachLichChieu(ngayDuocChon = null) {
  const vungDanhSach = document.getElementById("danh-sach-phim");
  if (!vungDanhSach) return;
  // QUẢN LÝ NGÀY
  if (!ngayDuocChon) {
    if (!ngayHienTai) {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      ngayHienTai = `${dd}/${mm}/${yyyy}`;
    }
    ngayDuocChon = ngayHienTai;
  } else {
    ngayHienTai = ngayDuocChon;
  }

  vungDanhSach.innerHTML = "";

  const oTimKiem = document.getElementById("o-tim-kiem-phim");
  const tuKhoa = oTimKiem ? oTimKiem.value.toLowerCase().trim() : "";

  let phimHopLe = [];

  // LỌC THEO TAB
  if (tabLichChieuHienTai === "dang-chieu") {
    phimHopLe = khoPhim.filter((phim) => phim.trangThai === "dang-chieu" && phim.suatChieu && phim.suatChieu[ngayDuocChon]);
  } else {
    phimHopLe = khoPhim.filter((phim) => phim.trangThai === "sap-chieu");
  }

  // LỌC TIẾP THEO TÊN PHIM
  if (tuKhoa !== "") phimHopLe = phimHopLe.filter((phim) => phim.ten.toLowerCase().includes(tuKhoa));

  if (phimHopLe.length === 0) {
    vungDanhSach.innerHTML = `<h5 class="text-white text-center w-100 my-5">Không có phim nào phù hợp.</h5>`;
    return;
  }

  // --- VẼ GIAO DIỆN PHIM ---
  phimHopLe.forEach((phim) => {
    const classNhan = phim.nhanTuoi === "P" ? "nhan-tuoi nhan-p" : "nhan-tuoi";

    let htmlChucNang = "";
    if (tabLichChieuHienTai === "dang-chieu") {
      const danhSachGio = phim.suatChieu[ngayDuocChon] || [];
      // BÍ QUYẾT: Gắn link sang trang đặt vé, mang theo ID, Ngày và Giờ
      // Lưu ý: Nếu file HTML đặt vé của nhóm cậu tên khác, hãy thay 'datve.html' thành tên chuẩn nhé
      htmlChucNang = danhSachGio
        .map(
          (gio) => `
                <button class="nut-suat-chieu" onclick="window.location.href='datve.html?id=${phim.id}&ngay=${ngayDuocChon}&gio=${gio}'">${gio}</button>
            `,
        )
        .join("");
    } else {
      htmlChucNang = `
                <p class="chu-khoi-chieu mb-2" style="width: 100%;">Khởi chiếu: ${phim.ngayKhoiChieu}</p>
                <button class="nut-xem-chi-tiet" onclick="hienChiTietPhim(${phim.id})">Xem Trailer</button>
            `;
    }

    const htmlPhim = `
            <div class="col-12 mb-4">
                <div class="the-phim-ngang row align-items-center m-0">
                    <div class="col-12 col-md-3 p-0" style="cursor: pointer;" onclick="hienChiTietPhim(${phim.id})">
                        <img src="${phim.poster}" class="img-fluid rounded shadow" alt="${phim.ten}">
                    </div>
                    <div class="col-12 col-md-9 mt-3 mt-md-0 px-md-4">
                        <h4 class="text-white mb-2" style="cursor: pointer;" onclick="hienChiTietPhim(${phim.id})">${phim.ten} <span class="${classNhan}">${phim.nhanTuoi}</span></h4>
                        <p class="text-secondary small mb-3">Thể loại: ${phim.theLoai} | Thời lượng: ${phim.thoiLuong}</p>
                        <div class="d-flex flex-wrap gap-2 align-items-center">${htmlChucNang}</div>
                    </div>
                </div>
            </div>
`;
    vungDanhSach.innerHTML += htmlPhim;
  });
}

// =================================================================
// 4. CHUYỂN TAB VÀ HIỆU ỨNG TRƯỢT GẠCH CHÂN
// =================================================================
function chuyenTabLichChieu(tabId, tabElement) {
  tabLichChieuHienTai = tabId;

  document.querySelectorAll(".tab-item").forEach((tab) => {
    tab.classList.remove("active");
    tab.classList.add("text-secondary");
  });
  tabElement.classList.add("active");
  tabElement.classList.remove("text-secondary");

  const thanhTruot = document.getElementById("thanh-truot-tab");
  if (thanhTruot) {
    thanhTruot.style.width = tabElement.offsetWidth + "px";
    thanhTruot.style.left = tabElement.offsetLeft + "px";
  }

  const vungChonNgay = document.getElementById("vung-chon-ngay");
  if (vungChonNgay) {
    vungChonNgay.style.display = tabId === "dang-chieu" ? "block" : "none";
  }

  renderDanhSachLichChieu();
}

// =================================================================
// 5. THANH CHỌN 7 NGÀY
// =================================================================
function renderThanhChonNgay() {
  const thanhChonNgay = document.getElementById("thanh-chon-ngay");
  if (!thanhChonNgay) return;

  thanhChonNgay.innerHTML = "";
  const today = new Date();
  const daysOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
  let html = "";

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    const formattedDate = `${dd}/${mm}/${yyyy}`;
    const dayName = i === 0 ? "Hôm nay" : daysOfWeek[date.getDay()];
    const activeClass = i === 0 ? "active" : "";

    html += `
            <button class="nut-ngay ${activeClass}" onclick="chonNgay(this, '${formattedDate}')">
                ${dd}-${mm}-${yyyy}<br><small>${dayName}</small>
            </button>
        `;
  }
  thanhChonNgay.innerHTML = html;
}

function chonNgay(btnElement, dateStr) {
  document.querySelectorAll(".nut-ngay").forEach((btn) => btn.classList.remove("active"));
  btnElement.classList.add("active");
  renderDanhSachLichChieu(dateStr);
}

// =================================================================
// 6. XEM CHI TIẾT PHIM VÀ QUAY LẠI
// =================================================================
function hienChiTietPhim(idPhim) {
  const phim = khoPhim.find((p) => p.id === idPhim);
  if (!phim) return;

  const vungChiTiet = document.getElementById("vung-chi-tiet");
  const classNhan = phim.nhanTuoi === "P" ? "nhan-tuoi nhan-p" : "nhan-tuoi";

  // 1. NÚT QUAY LẠI THÔNG MINH
  const urlParams = new URLSearchParams(window.location.search);
  const fromParam = urlParams.get("from");

  let nutQuayLai =
    fromParam === "home"
      ? `<button class="btn btn-outline-secondary mb-4 text-white" onclick="window.history.back()">&larr; Quay lại Trang chủ</button>`
      : `<button class="btn btn-outline-secondary mb-4 text-white" onclick="hienLichChieu()">&larr; Quay lại Lịch chiếu</button>`;

  // 2. NÚT ĐẶT VÉ (ĐÃ SỬA THÀNH LINK SANG TRANG ĐẶT VÉ CỦA BẠN CÙNG NHÓM)
  let nutDatVe =
    phim.trangThai === "dang-chieu"
      ? `<button class="btn nut-dat-ve mt-3" onclick="window.location.href='datve.html?id=${phim.id}'">ĐẶT VÉ NGAY</button>`
      : `<p class="chu-khoi-chieu mt-3" style="font-size: 18px;">Khởi chiếu: ${phim.ngayKhoiChieu}</p>`;

  vungChiTiet.innerHTML = `
        ${nutQuayLai}
        <div class="row g-4 g-md-5">
            <div class="col-12 col-md-4 text-center text-md-start">
                <img src="${phim.poster}" class="anh-poster-chi-tiet" alt="${phim.ten}">
            </div>
            <div class="col-12 col-md-8">
                <h2 class="text-white mb-2 fs-3 fs-md-2">${phim.ten} <span class="${classNhan}">${phim.nhanTuoi}</span></h2>
                <h5 class="text-warning mb-3">★ ${phim.diem} / 10</h5>
                <div class="text-secondary small mb-4">
                    <p class="mb-1"><strong>Thể loại:</strong> ${phim.theLoai || "Chưa cập nhật"}</p>
                    <p class="mb-1"><strong>Thời lượng:</strong> ${phim.thoiLuong || "Chưa cập nhật"}</p>
                </div>
                <h4 class="text-white h5">Nội dung tóm tắt</h4>
                <p class="text-secondary" style="line-height: 1.6; font-size: 15px;">${phim.moTa || "Đang cập nhật..."}</p>
                ${nutDatVe}
            </div>
        </div>
        <div class="row mt-4 mt-md-5">
            <div class="col-12">
                <h4 class="text-white h5 mb-3">Trailer Phim</h4>
                <div class="khung-trailer">
                    <video src="${phim.trailer}" controls muted autoplay style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"></video>
                </div>
            </div>
        </div>
    `;
  document.getElementById("vung-lich-chieu").classList.add("d-none");
  vungChiTiet.classList.remove("d-none");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function hienLichChieu() {
  // 1. Tắt video Youtube nếu đang mở để tránh tiếng kêu văng vẳng
  const iframeVideo = document.querySelector("#vung-chi-tiet iframe");
  if (iframeVideo) iframeVideo.src = "";

  // 2. Đảo ngược trạng thái: Ẩn Chi tiết, Hiện Lịch chiếu
  const vungChiTiet = document.getElementById("vung-chi-tiet");
  const vungLichChieu = document.getElementById("vung-lich-chieu");
  if (vungChiTiet) vungChiTiet.classList.add("d-none");
  if (vungLichChieu) vungLichChieu.classList.remove("d-none");

  // 3. Chống giật lag: Nếu vùng chứa phim đang bị rỗng thì yêu cầu vẽ lại ngay
  if (document.getElementById("danh-sach-phim") && document.getElementById("danh-sach-phim").innerHTML.trim() === "") {
    if (document.getElementById("thanh-chon-ngay")) renderThanhChonNgay();
    renderDanhSachLichChieu();
  }

  // 4. Dọn dẹp URL trên thanh địa chỉ (Xóa id phim để link sạch sẽ như cũ)
  try {
    const url = new URL(window.location);
    url.searchParams.delete("id");
    url.searchParams.delete("from");
    window.history.pushState({}, "", url);
  } catch (error) {
    console.log("Đang chạy trên máy tính (Local), bỏ qua bước dọn URL.");
  }
}
// =================================================================
// 7. KHỞI TẠO TỰ ĐỘNG KHI LOAD TRANG (ĐÃ FIX LỖI GIẬT KHUNG HÌNH)
// =================================================================
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // 1. Kích hoạt các hàm của Trang Chủ (Nếu có)
    if (document.getElementById("danh-sach-phim-trang-chu")) renderDanhSachTrangChu();
    if (document.getElementById("danh-sach-phim-sap-chieu-trang-chu")) renderDanhSachSapChieuTrangChu();

    // 2. Đọc đường link ngay lập tức, không dùng setTimeout delay nữa
    const urlParams = new URLSearchParams(window.location.search);
    const phimIdParam = urlParams.get("id");
    const tabParam = urlParams.get("tab");

    const vungLichChieu = document.getElementById("vung-lich-chieu");
    const vungChiTiet = document.getElementById("vung-chi-tiet");

    // 3. Xử lý kịch bản cho trang Lịch Chiếu
    if (vungLichChieu && vungChiTiet) {
      if (phimIdParam) {
        // KỊCH BẢN A: Có ID -> Đi thẳng vào Chi tiết phim
        // Bí quyết chống giật: Giấu vùng Lịch chiếu đi ngay lập tức trước khi nó kịp vẽ bậy lên màn hình
        vungLichChieu.classList.add("d-none");
        const targetId = parseInt(phimIdParam);
        if (!isNaN(targetId)) hienChiTietPhim(targetId);
      } else {
        // KỊCH BẢN B: Không có ID -> Mở trang Lịch chiếu bình thường
        vungLichChieu.classList.remove("d-none");
        if (document.getElementById("thanh-chon-ngay")) renderThanhChonNgay();
        if (document.getElementById("danh-sach-phim")) renderDanhSachLichChieu();

        // Nhảy Tab theo Link (Nhanh gấp 10 lần setTimeout cũ)
        const danhSachTab = document.querySelectorAll(".tab-item");
        if (tabParam === "sap-chieu" && danhSachTab.length >= 2) {
          chuyenTabLichChieu("sap-chieu", danhSachTab[1]);
        } else if (danhSachTab.length >= 1) {
          chuyenTabLichChieu("dang-chieu", danhSachTab[0]);
        }
      }
    }
  },
  // =================================================================
  // 8. TỰ ĐỘNG CĂN CHỈNH THANH TRƯỢT KHI THU PHÓNG MÀN HÌNH
  // =================================================================
  window.addEventListener("resize", () => {
    const tabDangChon = document.querySelector(".tab-item.active");
    const thanhTruot = document.getElementById("thanh-truot-tab");

    // Nếu màn hình thay đổi kích thước, lập tức đo lại tọa độ và gắn lại gạch chân
    if (tabDangChon && thanhTruot) {
      thanhTruot.style.width = tabDangChon.offsetWidth + "px";
      thanhTruot.style.left = tabDangChon.offsetLeft + "px";
    }
  }),
);
