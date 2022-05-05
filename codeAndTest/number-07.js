// v1.
export function isSymetricNumber(n) {
    if (n <= 1 || n >= 1000000) return false;
    //545
    let strNum = n.toString();
    let j = 1
    for (let i = 0; i < strNum.length; i++) {
        if (Number(strNum[i]) !== Number(strNum[strNum.length - j])) return false;
        j++;
    }
    return true;
}

//v2
export function isSymetricNumberV2(n) {
    if (n <= 1 || n >= 1000000) return false;

    let strNum = n.toString();
    let reversedStr = [...strNum].reverse().join('');
    // toán tử spread sẽ rải từng phần tử của string (nghĩa là từng ký tự) ra,
    // nên cần dùng join để gộp lại, và đồng thời biến mảng thành chuỗi.
    return strNum === reversedStr;
}




