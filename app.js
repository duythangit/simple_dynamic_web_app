//Yêu cầu module Express
const express = require("express");
//Tạo 1 ứng dụng Express
const app = express();
//Thiết lập cổng cho server
const port = 3000;

//Middleware để phân tích dữ liệu từ request
app.use(express.urlencoded({ extended: true }));

//Middleware để phân tích dữ liệu JSON từ body của yêu cầu
//có nghĩa là cho phép Express hiểu và xử lý dữ liệu JSON từ request
app.use(express.json());

//Middleware để phục vụ file tĩnh như HTML CSS Javascript từ thư mục public
app.use(express.static("public"));

// Middleware để phân tích dữ liệu từ form HTML
app.use(express.urlencoded({ extended: true }));

//Định nghĩa route chính trả về trang chào mừng khi người dùng truy cập
app.get("/api/v1/check", (req, res) => {
  res.send("Chào mừng bạn đến với ứng dụng web động!");
});

//Route POST nhận dữ liệu từ client và trả về phản hồi
// Khi client gửi dữ liệu đến địa chỉ `/submit` với phương thức POST, route này sẽ được xử lý
app.post("/api/v1/submit", (req, res) => {
  // lấy thuộc tính 'name' từ body của request
  const { name } = req.body;

  // Nếu 'name' tồn tại sẽ trả về Chào mừng 'name'!
  if (name) {
    res.json({ message: `Chào mừng ${name}!` });
  } else {
    // Nếu 'name' không tồn tại sẽ trả về phản hồi lỗi
    res.status(400).json({ message: "Vui lòng cung cấp tên của bạn" });
  }
});

//Server lắng nghe tại cổng 3000
//Khi server bắt đầu chạy, nó sẽ lắng nghe các yêu cầu từ cổng 3000
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});
