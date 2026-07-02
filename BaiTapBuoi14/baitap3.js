function classifyUser(user) {
    const displayName = user.name ? user.name : "Ẩn danh";
    const isAdult = user.age >= 18 ? true : false;
    const hasEmail = user.email !== "" ? true : false;
    const role = user.role ?? "guest"; // nếu user.role là null hoặc undefined thì mặc định là "guest"

    let status;

    if (user.score >= 80) {
        status = "Vip";
    }else if (user.score >= 50) {
        status = "normal";
    }else {
        status = "new";
    }

    const canAccess = isAdult && role !== "guest";

    return {
        displayName,
        isAdult,
        hasEmail,
        role,
        status,
        canAccess
    };


}



