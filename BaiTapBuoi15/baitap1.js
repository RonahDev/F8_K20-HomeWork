function classifyTriangle (a , b , c) {
    //check cạnh kh hợp lệ là a , b , c phải lớn hơn 0
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Cạnh không hợp lệ";
    }
    //check cạnh không tạo thành tam giác 
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Không tạo thành tam giác";
    }

    //check tam giác đều
    if (a === b && b === c) {
        return "Tam giác đều";
    }

    //check tam giác cân 
    if ( a === b || a === c || b === c) {
        return "Tam giác cân";
    }

    //check tam giác vuông
    if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        return "Tam giác vuông";
    }

    return "Tam giác thường";
}