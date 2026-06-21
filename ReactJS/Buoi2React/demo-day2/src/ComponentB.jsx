import "./ComponentB.module.css";

function ComponentB() {
    return <h1 className="heading-b">Component B</h1>
}

export default ComponentB;
//ES module : import , export
//Muốn ở App dùng được component thì cái component đó phải export ra phải xuất ra
// thì bên App mới import vào được

//Muốn css cho từng cái component thì kh thể cứ đặt tên className thông thường rùi dùng css .heading {...} được 
//khi inspect ra sẽ thấy trong thẻ style sẽ ghi là ._heading_1y39u(là một chuỗi kí tự được mã hóa theo cách nào đó)
//{và nó vẫn giữ nguyên thuộc tính css vd như color : green;}
//thuộc tính vẫn giữ nguyên nhưng mỗi className đặt cho mỗi component sẽ có thêm 1 đoạn kí tự được mã hóa đằng sau
//nó lấy cái đường dẫn file để mã hóa ra chuỗi kí tự mà mỗi đường dẫn tới 1 component kh bao giờ giống nhau
//nên là kí tự mã hóa đằng sau cũng sẽ khác nhau