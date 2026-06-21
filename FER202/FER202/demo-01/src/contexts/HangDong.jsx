//Đây là nơi lưu thông tin dùng chung
//Cách dùng :

import { createContext } from "react";

// 1. Tạo CONTEXT // Hang

export const HangDongContext = createContext();

//2 . Tạo PROVIDER // Hộp
// => Cách viết giống như 1 functional component
export const HangDongProvider = ({children})=> {
    const biKip = 'Cửu Âm Chân Kinh'
    //value : để khai báo các thông tin nào
    //bên ngoài được sử dụng
    //4 . Để giới hạn lại chỉ có những 
    //thành viên trong gia tộc mới có quyền vào
    // => children

    //5. Để bên ngoài có thể sử dụng thì phải export
    return (
        <>
            <HangDongContext.Provider value={{biKip}}>
                {children}
            </HangDongContext.Provider>
        </>
    )
}