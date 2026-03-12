#Bắt đầu

## Playwright
* là 1 **framwork**
* Ưu điểm
    * **Cross browser**, hỗ trợ các trình duyệt phổ biến như Chorme, Edge, Firefox, Safari 
    * **Cross platform**, code 1 lần, chạy trên các hệ điều hành phổ biến: Windows, Linux, MacOS
    * Code gen, Thao tác để sinh ra code

## Một số công cụ cần cài đặt

### NVM
* NVM = Node Version Manager, quản lý các phiên bản NodeJs
* NodeJs là công cụ để chạy code

### Git & GitHub
* Git: quản lý source code
* Github: chia sẻ code, làm việc nhóm

## Câu lệnh Git:
Một số cấu hình mặt định git trước khi làm việc:
* Config username (tên người dùng):
    * `git config –global user.name “<tên>”`
* Config email (địa chỉ email):
    * `git config –global user.email “<email>”`
* Config branch default (nhánh mặc định):
    * `git config –global init.defaultBranch main`

## Kết nối với GitHub
* SSH key:
    * là cặp khóa
        * id_rsa và id_rsa.pub
        * id_rsa, cần giữ bí mật
        * id_rsa.pub, có thể gửi cho người khác
    * giúp xác thực đăng nhập trở nên dễ dàng hơn
* Tạo key ssh:
`ssh-keygen -t rsa -b 4096 -C “email@example.com”`
* Lấy nội dung ssh key: `cat ~/.ssh/id_rsa.pub`
* Truy cập: `https://github.com/settings/ssh/new` để thêm ssh key

## Cài đặt Playwright:
`npm init playwright@latest`

## Khỏi tạo Git và đưa code lên GitHub
Khởi tạo Git
* Khởi tạo repo local: `git init`
* Liên kết repository vừa tạo với Git: `git remote add origin <ssh_link>`
* Thêm code: `git add .`
* Thêm commit: `git commit -m”init project”`
* Push code: `git push origin main`