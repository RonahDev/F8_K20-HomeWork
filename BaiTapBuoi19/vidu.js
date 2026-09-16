/* Argument trong Javascript 
- Đối số trong js là giá trị thực tế được truyền vào hàm khi gọi hàm đó.
---------------------------------------------------------------------------
! Có 2 khái niệm cần được làm rõ là Parameter(tham số) và Argument(đối số).
- Parameter Tên biến được định nghĩa ở phần khai báo hàm
(đóng vai trò như chỗ trống chờ nhận dữ liệu).

- Argument Giá trị dữ liệu cụ thể truyền vào để 
lấp đầy các chỗ trống đó khi gọi hàm.
---------------------------------------------------------------------------------
...args : có bao nhiêu đối số truyền vào là sẽ lấy hết các đối số còn lại và
gói chúng vào một mảng args.

VD : 
function sum(a,b , ...args) {
let sum = 0 ;
for (let arg of args) {
sum += arg ;
}
return sum ;
}

console.log ( 1 , 2 , 3); thì lúc này cái args sẽ là [3] , còn a = 1 , b = 2
-------------------------------------------------------------------------------

### Hoisting 


*/