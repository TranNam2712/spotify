# Trang Web Spotify Cơ Bản

## Giới thiệu

Dự án "Trang web Spotify cơ bản" là một ứng dụng web tái tạo các tính năng chính của Spotify, cho phép người dùng nghe nhạc, tạo danh sách phát và khám phá nghệ sĩ. Mục tiêu của dự án là xây dựng một nền tảng âm nhạc trực tuyến đơn giản, thân thiện với người dùng và đáp ứng, sử dụng React cho giao diện người dùng và Django cho backend.

## Công nghệ sử dụng

### Frontend

- **React**: Thư viện JavaScript để xây dựng giao diện người dùng
- **Redux**: Quản lý trạng thái ứng dụng
- **React Router**: Điều hướng giữa các trang
- **Axios**: Gửi yêu cầu HTTP đến backend
- **Material-UI**: Framework UI cho thiết kế responsive
- **tailwindcss**: Stylesheet cho styling

### Backend

- **Django**: Web framework Python
- **Django REST Framework**: Xây dựng RESTful API
- **MongoDB**: Cơ sở dữ liệu quan hệ

## Cài đặt

### Yêu cầu hệ thống

- Python 3.8+
- Node.js 20.16.0
- npm 6.0+ hoặc yarn 1.22+
- MongoDB

### Backend (Django)

1. Clone repository:

```bash
git clone https://github.com/TranNam2712/spotify.git
cd frontend
npm install
npm run dev
```

2. Tạo và kích hoạt môi trường ảo:

```bash
python -m venv venv
source venv/bin/activate
```

3. Cài đặt các gói phụ thuộc:

```bash
pip install -r requirements.txt
```

4. Thiết lập cơ sở dữ liệu:

```bash
cd backend
python manage.py migrate
```

5. Tạo superuser (tùy chọn):

```bash
python manage.py createsuperuser
```

## Tính năng

### Tính năng người dùng

- **Đăng ký và đăng nhập**: Hệ thống xác thực người dùng
- **Tìm kiếm âm nhạc**: Tìm kiếm bài hát, album và nghệ sĩ
- **Nghe nhạc**: Phát và tạm dừng bài hát, điều chỉnh âm lượng
- **Tạo playlist**: Tạo và quản lý danh sách phát cá nhân
- **Lưu bài hát yêu thích**: Đánh dấu và lưu bài hát ưa thích
- **Khám phá nghệ sĩ**: Xem thông tin chi tiết về nghệ sĩ và album

### Tính năng quản trị

- **Quản lý nội dung**: Thêm, sửa, xóa bài hát, album và nghệ sĩ
- **Quản lý người dùng**: Xem và quản lý tài khoản người dùng
- **Phân tích dữ liệu**: Xem thống kê về lượt phát và hoạt động người dùng

## Ghi chú

- Dự án này là nhằm mục đích học tập và không phải là sản phẩm thương mại.
- API của Spotify thực sự không được sử dụng trong dự án này. Tất cả dữ liệu âm nhạc được lưu trữ cục bộ.
- Để sử dụng chức năng đầy đủ, hãy thêm một số dữ liệu mẫu bằng cách chạy:
  ```bash
  python manage.py loaddata sample_data
  ```
