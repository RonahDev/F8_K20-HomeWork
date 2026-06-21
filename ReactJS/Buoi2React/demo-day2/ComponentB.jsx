import "./ComponentB.css";

function ComponentB() {
    return <h1 className="heading-b">Component B</h1>
}

export default ComponentB;
//ES module : import , export
//Muốn ở App dùng được component thì cái component đó phải export ra phải xuất ra
// thì bên App mới import vào được