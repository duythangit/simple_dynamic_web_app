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

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Định nghĩa route chính trả về trang chào mừng khi người dùng truy cập
app.get("/api/v1/check", (req, res) => {
  res.send("Chào mừng bạn đến với ứng dụng web động!");
});

app.post("/api/v1/submit", (req, res) => {
  const { name } = req.body;

  if (name) {
    res.json({ message: `Chào mừng ${name}!` });
  } else {
    res.status(400).json({ message: "Vui lòng cung cấp tên của bạn" });
  }
});
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});
