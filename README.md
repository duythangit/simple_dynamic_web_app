# Làm quen với ứng dụng web động đơn giản

## Mục tiêu

- Hiểu và sử dụng các khái niệm cơ bản về ứng dụng web động .
- Sử dụng HTML CSS và JavaScript để tạo giao diện đơn giản cho 1 ứng dụng web động
- Sử dụng `Node.js` và `Express` để tạo server đơn giản xử lý các yêu cầu HTTP
- Tích hợp form với logic xử lý phản hồi từ server, thực hiện thao tác gửi dữ liệu từ client lên server thông qua HTTP POST.
- Kiểm thử đơn giản với postman để kiểm tra phản hồi từ server đối với các yêu cầu GET và POST bao gồm cả trường hợp hợp lệ và không hợp lệ

## Các bước thực hiện

### Bước 1: Khởi tạo dự án Node.js

1. Mở terminal và tạo thư mục dự án:

```bash
    mkdir SIMPLE_DYNAMIC_WEB_APP
    cd SIMPLE_DYNAMIC_WEB_APP
    code .
```

**Lưu ý**: Việc này chúng ta vừa làm bằng GUI thay vì CLI như trên

2. Khởi tạo dự án Node.js:

```bash
    npm init -y
```

**Lưu ý:** cần phải cài Node.js trước

### Bước 2: Cài đặt Express

- Cài đặt Express framework:

```bash
npm install express --save
```

### Bước 3: Tạo file app.js để xây dựng server

1. Trong thư mục dự án, tạo file `app.js` với nội dung:
