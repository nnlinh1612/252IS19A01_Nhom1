// Kho dữ liệu phim mẫu chuẩn rạp
const khoPhim = [
    {
        id: 1,
        ten: "Doraemon Movie 45: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh",
        theLoai: "Hoạt Hình, Giả Tưởng, Phiêu Lưu",
        thoiLuong: "102 phút",
        khoiChieu: "22/05/2026",
        nhanTuoi: "P",
        diem: "9.0",
        poster: "hinhanh/Poster1.jpg",
        moTa: "Bước vào kì nghỉ hè, Nobita và các bạn tranh cãi chí chóe về địa điểm cắm trại. Theo đề xuất của Doraemon, cả nhóm quyết định cắm trại giữa lòng đại dương! Sử dụng bảo bối thần kì xe Buggy chạy dưới nước và đèn pin thích nghi, 5 bạn nhỏ tận hưởng chuyến phiêu lưu kỳ thú...",
        trailer: "hinhanh/Trailer1.mp4",
        suatChieu: {
            "22/05/2026": ["09:00", "13:30", "16:45"],
            "23/05/2026": ["10:15", "14:30", "19:00", "21:30"],
            "30/05/2026": ["08:30", "15:00", "20:30"],
            "04/06/2026": ["08:30", "15:00", "20:30"],
            "07/06/2026": ["08:30", "15:00", "20:30"],
            "08/06/2026": ["08:30", "15:00", "20:30"],
            "10/06/2026": ["08:30", "15:00", "20:30"]
        }
    },
    {
        id: 2, 
        ten: "Shin Cậu Bé Bút Chì: Vương Quốc Nguệch Ngoạc Và Bốn Dũng Sĩ Bất Ổn",
        theLoai: "Hoạt Hình, Hài",
        thoiLuong: "105 phút",
        nhanTuoi: "P",
        diem: "9.7", 
        poster: "hinhanh/Poster2.jpg",
        moTa: "Bộ phim xoay quanh một vương quốc lơ lửng mang tên Rakuga, tồn tại nhờ nguồn năng lượng đến từ những nét vẽ của con người. Nhưng khi thế giới loài người dần đánh mất sự sáng tạo, Rakuga đứng bên bờ sụp đổ.",
        trailer: "hinhanh/Trailer2.mp4",
        suatChieu: {
            "22/05/2026": ["18:15", "21:00", "23:25"],
            "24/05/2026": ["19:30", "22:45"],
            "30/05/2026": ["08:30", "15:00", "20:30"],
            "04/06/2026": ["08:30", "15:00", "20:30"],
            "07/06/2026": ["08:30", "15:00", "20:30"],
            "08/06/2026": ["08:30", "15:00", "20:30"],
            "11/06/2026": ["10:15", "14:30", "19:00", "21:30"],
            "12/06/2026": ["10:15", "14:30", "19:00", "21:30"]
        }
    },
    {
        id: 3, 
        ten: "Super Mario Thiên Hà",
        theLoai: "Hoạt Hình, Phiêu Lưu, Hài, Hành Động",
        thoiLuong: "99 phút",
        nhanTuoi: "P",
        diem: "8.1", 
        poster: "hinhanh/Poster3.jpg",
        moTa: "Phim Super Mario Thiên hà là một bộ phim hoạt hình máy tính phiêu lưu hài hước của Hoa Kỳ dựa trên trò chơi điện tử Super Mario Galaxy năm 2007 và loạt trò chơi điện tử Mario của Nintendo.",
        trailer: "hinhanh/Trailer3.mp4",
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
            "12/06/2026": ["10:15", "14:30", "19:00", "21:30"]
        }
    },
    {
        id: 4,
        ten: "Mèo Siêu Quậy Ở Viện Bảo Tàng",
        theLoai: "Hoạt Hình, Phiêu Lưu, Hài",
        thoiLuong: "112 phút",
        nhanTuoi: "P",
        diem: "8.3",
        poster: "hinhanh/Poster4.jpg",
        moTa: "Phim kể về Vincent, một chú mèo lông vàng, và Maurice, một chú chuột, cùng với những chú mèo khác hợp tác để bảo vệ các tác phẩm nghệ thuật trong Bảo tàng Hermitage.",
        trailer: "hinhanh/Trailer4.mp4",
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
            "13/06/2026": ["19:30", "22:45"]
        }
    },
    {
        id: 5,
        ten: "Đội Thám Tử Cừu",
        theLoai: "Hài, Thần Bí",
        thoiLuong: "110 phút",
        nhanTuoi: "P",
        diem: "7.3",
        poster: "hinhanh/Poster5.jpg",
        moTa: "Đội Thám Tử Cừu là một bộ phim hài bí ẩn năm 2026 do Kyle Balda đạo diễn và Craig Mazin viết kịch bản, dựa trên tiểu thuyết Ba Chiếc Túi Đầy năm 2005 của Leonie Swann.",
        trailer: "hinhanh/Trailer5.mp4",
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
            "13/06/2026": ["19:30", "22:45"]
        }
    },
    {
        id: 6,
        ten: "Tạm Biệt Gohan",
        theLoai: "Tâm Lý, Tình Cảm Gia Đình",
        thoiLuong: "141 phút",
        nhanTuoi: "K",
        diem: "8.5",
        poster: "hinhanh/Poster6.jpg",
        moTa: "Câu chuyện kể về một chú chó hoang màu trắng có mũi hồng tên là Gohan, cuộc đời của chú trải qua ba giai đoạn khác nhau. Trong suốt hành trình của mình, chú luôn khao khát một nơi để gọi là nhà và một người chủ có thể cho chú tình yêu thương và sự ấm áp.",
        trailer: "hinhanh/Trailer6.mp4",
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
            "13/06/2026": ["19:30", "22:45"]
        }
    },
    {
        id: 7,
        ten: "Thoát Khỏi Tận Thế",
        theLoai: "Phiêu Lưu, Khoa Học Viễn Tưởng",
        thoiLuong: "156 phút",
        nhanTuoi: "K",
        diem: "7.0",
        poster: "hinhanh/Poster7.jpg",
        moTa: "Ryland Grace tỉnh dậy sau cơn hôn mê trên một con tàu vũ trụ. Ban đầu, anh có những biểu hiện bất thường và bị mất trí nhớ ngược dòng. Grace phát hiện rằng anh là người sống sót duy nhất trong số ba thành viên phi hành đoàn trên tàu và anh đang ở cách Trái Đất hàng năm ánh sáng trong một Hệ Mặt Trời xa xôi.",
        trailer: "hinhanh/Trailer7.mp4",
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
            "13/06/2026": ["19:30", "22:45"]
        }
    },
    {
        id: 8,
        ten: "Michael",
        theLoai: "Ca Nhạc, Chính Kịch",
        thoiLuong: "127 phút",
        nhanTuoi: "K",
        diem: "9.0",
        poster: "hinhanh/Poster8.jpg",
        moTa: "Michael là bộ phim điện ảnh tiểu sử – chính kịch ca nhạc của Mỹ ra mắt năm 2026, do Antoine Fuqua đạo diễn và John Logan chắp bút kịch bản.",
        trailer: "hinhanh/Trailer8.mp4",
        suatChieu: {
            "22/05/2026": ["18:15", "21:00", "23:25"],
            "24/05/2026": ["19:30", "22:45"],"23/05/2026": ["18:15", "21:00", "23:25"],
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
            "13/06/2026": ["19:30", "22:45"]
        }
    },
    {
        id: 9,
        ten: "Trùm Sò",
        theLoai: "Hài, Cổ Trang, Dân Gian",
        thoiLuong: "105 phút",
        nhanTuoi: "K",
        diem: "6.9",
        poster: "hinhanh/Poster9.jpg",
        moTa: "Trùm Sò (đạo diễn Đức Thịnh) là bộ phim hài chiếu rạp lấy cảm hứng từ điển tích dân gian Ngao – Sò – Ốc – Hến. Tác phẩm xoay quanh một nhân vật cực kỳ ke kiệt nhưng vô tình bị cuốn vào một vụ cướp bất đắc dĩ tại một ngôi làng nghèo.",
        trailer: "hinhanh/Trailer9.mp4",
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
            "13/06/2026": ["19:30", "22:45"]
        }
    },
    {
        id: 10,
        ten: "Dưới Bóng Điện Hạ",
        theLoai: "Tâm Lý, Cổ Trang, Lịch Sử",
        thoiLuong: "117 phút",
        nhanTuoi: "T16",
        diem: "8.8",
        poster: "hinhanh/Poster10.jpg",
        moTa: "Năm 1457 dưới triều đại Joseon. Vua Danjong (Park Ji-hoon đóng) lên ngôi từ năm 12 tuổi nhưng nhanh chóng bị chính người chú ruột truất ngôi và đày đến vùng lưu đày Cheongnyeongpo hẻo lánh.",
        trailer: "hinhanh/Trailer10.mp4",
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
            "13/06/2026": ["19:30", "22:45"]
        }
    },
    {
        id: 11,
        ten: "Phí Phông",
        theLoai: "Kinh Dị, Tâm Linh",
        thoiLuong: "125 phút",
        nhanTuoi: "T16",
        diem: "8.0",
        poster: "hinhanh/Poster11.jpg",
        moTa: "Theo chân hai anh em pháp sư là Còn và Dương trên hành trình trở lại bản làng để cứu mẹ. Bà đã bị cuốn vào lời nguyền đáng sợ liên quan đến Phí Phông – một thực thể có hình hài giống con người, ban đêm có khả năng tách đầu và biến đổi để đi săn mồi, hút máu.",
        trailer: "hinhanh/Trailer11.mp4",
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
            "13/06/2026": ["19:30", "22:45"]
        }
    },
    {
        id: 12,
        ten: "Bài Trùng Phá Án",
        theLoai: "Trinh Thám, Hành Động, Hài",
        thoiLuong: "120 phút",
        nhanTuoi: "T16",
        diem: "7.3",
        poster: "hinhanh/Poster12.jpg",
        moTa: "Câu chuyện bắt đầu tại một thị trấn nhỏ khi cựu cảnh sát trọng án Jae-hyuk bị ép buộc hợp tác cùng tân binh Joong-ho để điều tra một vụ trộm cắp vặt. Tưởng chừng chỉ là một vụ án nhỏ, cả hai vô tình phát hiện hàng loạt manh mối chưa từng được tiết lộ, dẫn họ đến một vụ án mạng kinh hoàng ở Seoul đã khép hồ sơ từ lâu. Bất chấp sự cản trở từ cảnh sát khu vực Gangnam, bộ đôi bất đắc dĩ này quyết tâm hợp sức vén màn sự thật, truy tìm hung thủ thực sự đứng sau.",
        trailer: "hinhanh/Trailer12.mp4",
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
            "12/06/2026": ["10:15", "14:30", "19:00", "21:30"]
        }
    },
    {
        id: 13,
        ten: "Một Thời Ta Đã Yêu",
        theLoai: "Tâm Lý, Tình Cảm, Lãng Mạn",
        thoiLuong: "115 phút",
        nhanTuoi: "T16",
        diem: "5.3",
        poster: "hinhanh/Poster13.jpg",
        moTa: "Lấy bối cảnh năm 2006 tại một thị trấn biển ở Phú Yên, Bảo (18 tuổi) chuẩn bị bước vào đời thì gặp Quỳnh – một người phụ nữ sắc sảo, từng trải vừa chuyển về sống trong xóm. Cảm xúc yêu đương cuồng nhiệt, đơn phương của chàng trai trẻ dành cho Quỳnh đã phá vỡ quỹ đạo cuộc đời cậu.",
        trailer: "hinhanh/Trailer13.mp4",
        suatChieu: {
            "23/05/2026": ["18:15", "21:00", "23:25"],
            "24/05/2026": ["19:30", "22:45"],"23/05/2026": ["18:15", "21:00", "23:25"],
            "25/05/2026": ["18:15", "21:00", "23:25"],
            "26/05/2026": ["18:15", "21:00", "23:25"],
            "27/05/2026": ["18:15", "21:00", "23:25"],
            "28/05/2026": ["19:30", "22:45"],
            "29/05/2026": ["18:15", "21:00", "23:25"],
            "04/06/2026": ["08:30", "15:00", "20:30"],
            "07/06/2026": ["08:30", "15:00", "20:30"],
            "08/06/2026": ["08:30", "15:00", "20:30"],
            "10/06/2026": ["10:15", "14:30", "19:00", "21:30"],
            "12/06/2026": ["10:15", "14:30", "19:00", "21:30"]
        }
    },
    {
        id: 14,
        ten: "Hồ Nuốt Người",
        theLoai: "Kinh Dị, Giật Gân",
        thoiLuong: "146 phút",
        nhanTuoi: "T18",
        diem: "8.4",
        poster: "hinhanh/Poster14.jpg",
        moTa: "Nữ PD kỳ cựu Su-in (Kim Hye-yoon thủ vai) dẫn đầu đoàn làm phim đến hồ nước Salmokji hẻo lánh để ghi hình bổ sung. Tuy nhiên, cô nhanh chóng có dự cảm bất an và nhận ra có một thế lực ma quái đang ẩn nấp.",
        trailer: "hinhanh/Trailer14.mp4",
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
        }
    },
    {
        id: 15,
        ten: "Xác Ướp",
        theLoai: "Kinh Dị, Siêu Nhiên",
        thoiLuong: "151 phút",
        nhanTuoi: "T18",
        diem: "8.1",
        poster: "hinhanh/Poster15.jpg",
        moTa: "Tám năm trước, cô con gái nhỏ của một cặp vợ chồng đã biến mất không dấu vết trong sa mạc.",
        trailer: "hinhanh/Trailer15.mp4",
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
        }
    },
    {
        id: 16,
        ten: "Làng Khát Máu",
        theLoai: "Kinh Dị, Trinh Thám, Tâm Linh",
        thoiLuong: "136 phút",
        nhanTuoi: "T18",
        diem: "7.3",
        poster: "hinhanh/Poster16.jpg",
        moTa: "Câu chuyện bắt đầu khi một biên tập viên tạp chí chuyên điều tra về các hiện tượng kỳ bí đột ngột mất tích. Để tìm kiếm đồng nghiệp, nam phóng viên trẻ Ozawa Yūki (Eiji Akaso thủ vai) và một nhà báo đã quyết định dấn thân vào cuộc điều tra.",
        trailer: "hinhanh/Trailer16.mp4",
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
        }
    },
    {
        id: 17,
        ten: "Làng Trùng Tang",
        theLoai: "Kinh Dị, Tâm Linh",
        thoiLuong: "140 phsut",
        nhanTuoi: "T18",
        diem: "7.3",
        poster: "hinhanh/Poster17.jpg",
        moTa: "Cậu học sinh nghèo Jaya liên tục bị Darma (con trai trưởng làng quyền lực) bắt nạt tàn bạo. Sự việc bị nhà trường và hiệu trưởng phớt lờ để che đậy danh tiếng.",
        trailer: "hinhanh/Trailer17.mp4",
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
        }
    },
    {
        id: 18,
        ten: "Hào Quang Đơn Độc",
        theLoai: "Tâm Lý, Giật Gân",
        thoiLuong: "125 phút",
        nhanTuoi: "T18",
        diem: "7.3",
        poster: "hinhanh/Poster18.jpg",
        moTa: "Sau một tai nạn bí ẩn ngay trên sân khấu và phải hủy lưu diễn, nữ ca sĩ (Anne Hathaway) chuẩn bị cho sự kiện tái xuất lớn nhất sự nghiệp.",
        trailer: "hinhanh/Trailer18.mp4",
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
        }
    },
];

// =================================================================
// 1. HÀM HIỂN THỊ TRANG CHỦ (GIỚI HẠN 8 PHIM, 4 PHIM/DÒNG)
// =================================================================
function renderDanhSachTrangChu() {
    const vungTrangChu = document.getElementById("danh-sach-phim-trang-chu");
    if (!vungTrangChu) return;
    vungTrangChu.innerHTML = ""; 

    khoPhim.slice(0, 8).forEach(phim => {
        const classNhan = phim.nhanTuoi === "P" ? "nhan-tuoi nhan-p" : "nhan-tuoi";
        const htmlPhim = `
            <div class="col-6 col-md-4 col-lg-3 d-flex mb-4">
                <div class="the-phim-home d-flex flex-column w-100" onclick="window.location.href='Lichchieu.html?id=${phim.id}'">
                    <div class="khung-anh-home">
                        <img src="${phim.poster}" alt="${phim.ten}">
                        <div class="lop-phu-home">
                            <button class="nut-xem-chi-tiet">Chi tiết</button>
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
// Biến này để ghi nhớ người dùng đang xem ngày nào, tránh bị reset khi gõ tìm kiếm
let ngayHienTai = null;
function renderDanhSachLichChieu(ngayDuocChon = null) {
    const vungDanhSach = document.getElementById("danh-sach-phim");
    if(!vungDanhSach) return;

    // QUẢN LÝ NGÀY: Giữ đúng ngày đang xem khi người dùng gõ tìm kiếm
    if (!ngayDuocChon) {
        if (!ngayHienTai) {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            ngayHienTai = `${dd}/${mm}/${yyyy}`;
        }
        ngayDuocChon = ngayHienTai;
    } else {
        ngayHienTai = ngayDuocChon; // Cập nhật lại nếu người dùng click nút ngày khác
    }

    vungDanhSach.innerHTML = ""; 

    // ĐỌC DỮ LIỆU TỪ Ô TÌM KIẾM
    const oTimKiem = document.getElementById("o-tim-kiem-phim");
    // Lấy chữ in hoa/in thường đều chuyển về chữ thường để so sánh cho chuẩn
    const tuKhoa = oTimKiem ? oTimKiem.value.toLowerCase().trim() : "";

    // BỘ LỌC 1: Lọc những phim chiếu trong ngày được chọn
    let phimHopLe = khoPhim.filter(phim => phim.suatChieu && phim.suatChieu[ngayDuocChon]);

    // BỘ LỌC 2: Nếu có gõ từ khóa, lọc tiếp theo tên phim
    if (tuKhoa !== "") {
        phimHopLe = phimHopLe.filter(phim => phim.ten.toLowerCase().includes(tuKhoa));
    }

    // Nếu lọc xong mà không còn phim nào thì báo lỗi
    if (phimHopLe.length === 0) {
        vungDanhSach.innerHTML = `<h5 class="text-white text-center w-100 my-5">Không tìm thấy phim nào phù hợp với từ khóa "${tuKhoa}".</h5>`;
        return;
    }

    // In danh sách phim đã lọc ra màn hình
    phimHopLe.forEach(phim => {
        const classNhan = phim.nhanTuoi === "P" ? "nhan-tuoi nhan-p" : "nhan-tuoi";
        const danhSachGio = phim.suatChieu[ngayDuocChon];

        const htmlPhim = `
            <div class="col-12 mb-4">
                <div class="the-phim-ngang row align-items-center m-0">
                    <div class="col-12 col-md-3 p-0 text-center text-md-start" style="cursor: pointer;" onclick="hienChiTietPhim(${phim.id})">
                        <img src="${phim.poster}" class="img-fluid rounded shadow" alt="${phim.ten}">
                    </div>
                    <div class="col-12 col-md-9 mt-3 mt-md-0 px-md-4">
                        <h4 class="text-white mb-2" style="cursor: pointer;" onclick="hienChiTietPhim(${phim.id})">
                            ${phim.ten} <span class="${classNhan} ms-2">${phim.nhanTuoi}</span>
                        </h4>
                        <p class="text-secondary small mb-1">Thể loại: ${phim.theLoai || "Chưa cập nhật"} | Thời lượng: ${phim.thoiLuong || "Chưa cập nhật"}</p>
                        <p class="text-secondary small mb-3">Đánh giá rạp: ★ ${phim.diem}</p>
                        
                        <div class="d-flex flex-wrap gap-2">
                            ${danhSachGio.map(gio => `
                                <button class="nut-suat-chieu" onclick="alert('Tiến hành đặt vé suất ${gio} - Ngày ${ngayDuocChon}')">${gio}</button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        vungDanhSach.innerHTML += htmlPhim;
    });
}
// // =================================================================
// // 2. HÀM HIỂN THỊ LỊCH CHIẾU (LỌC THEO SUẤT CHIẾU, ĐÃ KHẮC PHỤC LỖI CRASH)
// // =================================================================
// function renderDanhSachLichChieu(ngayDuocChon = null) {
//     const vungDanhSach = document.getElementById("danh-sach-phim");
//     if(!vungDanhSach) return;

//     if (!ngayDuocChon) {
//         const today = new Date();
//         const dd = String(today.getDate()).padStart(2, '0');
//         const mm = String(today.getMonth() + 1).padStart(2, '0');
//         const yyyy = today.getFullYear();
//         ngayDuocChon = `${dd}/${mm}/${yyyy}`;
//     }

//     vungDanhSach.innerHTML = ""; 

//     // Lọc cực kỳ an toàn: Chỉ lấy những phim có khai báo giờ chiếu trong ngày đó
//     const phimHopLe = khoPhim.filter(phim => phim.suatChieu && phim.suatChieu[ngayDuocChon]);

//     // Nếu rạp không có lịch chiếu ngày hôm đó
//     if (phimHopLe.length === 0) {
//         vungDanhSach.innerHTML = `<h5 class="text-white text-center w-100 my-5">Hiện chưa có lịch chiếu phim cho ngày ${ngayDuocChon}.</h5>`;
//         return;
//     }

//     // Tiến hành vẽ danh sách phim
//     phimHopLe.forEach(phim => {
//         const classNhan = phim.nhanTuoi === "P" ? "nhan-tuoi nhan-p" : "nhan-tuoi";
//         const danhSachGio = phim.suatChieu[ngayDuocChon];

//         const htmlPhim = `
//             <div class="col-12 mb-4">
//                 <div class="the-phim-ngang row align-items-center m-0">
//                     <div class="col-12 col-md-3 p-0 text-center text-md-start" style="cursor: pointer;" onclick="hienChiTietPhim(${phim.id})">
//                         <img src="${phim.poster}" class="img-fluid rounded shadow" alt="${phim.ten}">
//                     </div>
//                     <div class="col-12 col-md-9 mt-3 mt-md-0 px-md-4">
//                         <h4 class="text-white mb-2" style="cursor: pointer;" onclick="hienChiTietPhim(${phim.id})">
//                             ${phim.ten} <span class="${classNhan} ms-2">${phim.nhanTuoi}</span>
//                         </h4>
//                         <p class="text-secondary small mb-1">Thể loại: ${phim.theLoai || "Chưa cập nhật"} | Thời lượng: ${phim.thoiLuong || "Chưa cập nhật"}</p>
//                         <p class="text-secondary small mb-3">Đánh giá rạp: ★ ${phim.diem}</p>
                        
//                         <div class="d-flex flex-wrap gap-2">
//                             ${danhSachGio.map(gio => `
//                                 <button class="nut-suat-chieu" onclick="alert('Tiến hành đặt vé suất ${gio} - Ngày ${ngayDuocChon}')">${gio}</button>
//                             `).join('')}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//         vungDanhSach.innerHTML += htmlPhim;
//     });
// }

// =================================================================
// 3. HÀM TỰ ĐỘNG TẠO 7 NÚT CHỌN NGÀY
// =================================================================
function renderThanhChonNgay() {
    const thanhChonNgay = document.getElementById('thanh-chon-ngay');
    if (!thanhChonNgay) return;
    
    thanhChonNgay.innerHTML = ''; 
    const today = new Date();
    const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    let html = '';

    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i); 
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        const formattedDate = `${dd}/${mm}/${yyyy}`; 
        const dayName = (i === 0) ? 'Hôm nay' : daysOfWeek[date.getDay()];
        const activeClass = (i === 0) ? 'active' : ''; 

        html += `
            <button class="nut-ngay ${activeClass}" onclick="chonNgay(this, '${formattedDate}')">
                ${dd}-${mm}-${yyyy}<br><small>${dayName}</small>
            </button>
        `;
    }
    thanhChonNgay.innerHTML = html;
}

// Xử lý khi click vào nút Ngày
function chonNgay(btnElement, dateStr) {
    document.querySelectorAll('.nut-ngay').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    renderDanhSachLichChieu(dateStr);
}

// =================================================================
// 4. HÀM XEM CHI TIẾT VÀ QUAY LẠI
// =================================================================
function hienChiTietPhim(idPhim) {
    const phim = khoPhim.find(p => p.id === idPhim);
    if (!phim) return;

    const vungChiTiet = document.getElementById("vung-chi-tiet");
    const classNhan = phim.nhanTuoi === "P" ? "nhan-tuoi nhan-p" : "nhan-tuoi";

    vungChiTiet.innerHTML = `
        <button class="btn btn-outline-secondary mb-4 text-white" onclick="hienLichChieu()">&larr; Quay lại Lịch chiếu</button>
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
                <button class="btn nut-dat-ve mt-3" onclick="alert('Tiến hành đặt vé phim ${phim.ten}')">ĐẶT VÉ NGAY</button>
            </div>
        </div>
        <div class="row mt-4 mt-md-5">
            <div class="col-12">
                <h4 class="text-white h5 mb-3">Trailer Phim</h4>
                <div class="khung-trailer">
                    <iframe src="${phim.trailer}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    `;
    document.getElementById("vung-lich-chieu").classList.add("d-none");
    vungChiTiet.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hienLichChieu() {
    const iframeVideo = document.querySelector("#vung-chi-tiet iframe");
    if (iframeVideo) iframeVideo.src = ""; 
    document.getElementById("vung-chi-tiet").classList.add("d-none");
    document.getElementById("vung-lich-chieu").classList.remove("d-none");
    const url = new URL(window.location);
    url.searchParams.delete('id');
    window.history.pushState({}, '', url);
}

// =================================================================
// 5. CHẠY TỰ ĐỘNG KHỞI TẠO WEB
// =================================================================
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("danh-sach-phim-trang-chu")) renderDanhSachTrangChu();
    if (document.getElementById("thanh-chon-ngay")) renderThanhChonNgay(); 
    if (document.getElementById("danh-sach-phim")) renderDanhSachLichChieu(); 

    const urlParams = new URLSearchParams(window.location.search);
    const phimIdParam = urlParams.get('id');
    if (phimIdParam && document.getElementById("vung-chi-tiet")) {
        const targetId = parseInt(phimIdParam);
        if (!isNaN(targetId)) setTimeout(() => hienChiTietPhim(targetId), 100);
    }
});