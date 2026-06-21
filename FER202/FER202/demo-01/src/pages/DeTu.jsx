import React, { useContext } from 'react'
import { HangDongContext } from '../contexts/HangDong'

export default function DeTu() {
    //Làm sao để đệ tử có thể lấy được cuốn bí kíp
    //Props Drilling :
    //truyền thông tin props qua nhiều component
    //CONTEXT
    //Muốn lấy bí kíp từ CONTEXT
    // {biKip}
    //dùng hook useContext để lấy thông tin từ context
    // => nhớ import hangdongcontext và useContext
    
    const {biKip} = useContext(HangDongContext)
  return (
    <>
      
    </>
  )
}
