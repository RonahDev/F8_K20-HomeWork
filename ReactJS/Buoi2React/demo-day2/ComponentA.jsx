import "./ComponentA.css";

function ComponentA() {
    return <h1 className="heading-a">Component A</h1>
}

export default ComponentA;
//ES module : import , export
//Muốn ở App dùng được component thì cái component đó phải export ra phải xuất ra
// thì bên App mới import vào được