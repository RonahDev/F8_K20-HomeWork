function calculateScore (level , kills, boosted) {
    //xử lý điều kiện của level và kills
    //level , kills : kh phải số nhỏ or nhỏ hơn 0 ,
    //return về dữ liệu kh hợp lệ
    if(
        typeof level !== 'number' || 
        typeof kills !== 'number' ||
        level < 0 ||
        kills < 0
    ){
        return "Dữ liệu không hợp lệ";
    }
    // Nếu boosted không phải boolean thì mặc định là false
    if (typeof boosted !== 'boolean') {
        boosted = false;
    }

    const baseScore  = kills * 10;
    const bonusScore = level >= 5 ? baseScore * 0.5 : baseScore * 0.2;
    const finalScore = boosted ? (baseScore + bonusScore) * 2 : baseScore + bonusScore;

     return Math.floor(finalScore);
}
console.log(calculateScore(5, 20, true)); // Dữ liệu không hợp lệ