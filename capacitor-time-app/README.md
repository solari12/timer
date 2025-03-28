# Ứng dụng Hiển thị Thời gian với Capacitor

## Mô tả
Ứng dụng đơn giản sử dụng Capacitor để:
- Hiển thị thời gian hiện tại (giờ địa phương) khi nhấn nút.
- Gửi thông báo cục bộ với thời gian hiện tại.
- Chia sẻ thời gian hiện tại qua Share API.
- (Bonus) Chụp ảnh màn hình ứng dụng.

## Yêu cầu cài đặt
1. **Node.js**: Đã cài đặt (phiên bản 16.x hoặc cao hơn).
2. **npm**: Đi kèm với Node.js.
3. **Android Studio**: Để chạy giả lập Android (hoặc Xcode cho iOS).
4. **Capacitor CLI**: Cài đặt toàn cục bằng lệnh:
npm install -g @capacitor/cli

## Hướng dẫn chạy ứng dụng

### 1. Cài đặt dependencies
- Clone hoặc giải nén mã nguồn từ thư mục dự án.
- Mở terminal trong thư mục dự án và chạy:
npm install

### 2. Cấu hình Capacitor
- Thêm nền tảng Android (hoặc iOS nếu cần):
    npx cap add android

- Đồng bộ dự án:
    npx cap sync

### 3. Chạy ứng dụng
- Mở dự án trong Android Studio:
npx cap open android

- Trong Android Studio:
- Chọn thiết bị giả lập (hoặc kết nối thiết bị thật qua USB với chế độ debug bật).
- Nhấn nút "Run" để build và chạy ứng dụng.

### 4. Kiểm tra tính năng
- **Hiển thị thời gian**: Nhấn nút "Hiển thị thời gian" để xem giờ, phút, giây hiện tại.
- **Thông báo cục bộ**: Thời gian hiện tại sẽ xuất hiện trong thông báo sau khi nhấn nút.
- **Chia sẻ**: Nhấn nút "Chia sẻ" để gửi thời gian qua ứng dụng khác (email, tin nhắn, v.v.).
- **(Bonus) Chụp màn hình**: Nhấn nút "Chụp màn hình" để lưu ảnh vào thiết bị (nếu được triển khai).

## Cấu trúc thư mục
- `www/`: Chứa mã nguồn HTML, CSS, JavaScript.
- `android/`: Thư mục dự án Android được tạo bởi Capacitor.
- `node_modules/`: Các thư viện đã cài đặt.
- `package.json`: Danh sách dependencies và script.

## Ghi chú
- Đảm bảo thiết bị giả lập hoặc thật có kết nối internet lần đầu để tải các plugin Capacitor.
- Nếu gặp lỗi quyền (permissions), kiểm tra file `AndroidManifest.xml` trong thư mục `android/