function getTime(y1, m1, d1, kigen) {
  let y2 = 0;
  let m2 = 0;
  let d2 = 0;
  let uruuToshi = [1996, 2000, 2004, 2008, 2012, 2024];

  if (d1 === 1) {
    d2 = 31;
    m2 = m1 + kigen - 1;
  } else {
    d2 = d1 - 1;
    m2 = m1 + kigen;
  }

  if (m2 > 12) {
    m2 = m2 - 12;
    y2 = y1 + 1;
  } else {
    y2 = y1;
  }

  if (m2 === 2) {
    if (d2 === 29 || d2 === 30 || d2 === 31) {
      if (uruuToshi.includes(y2)) {
        d2 = 29;
      } else d2 = 28;
    }
  } else if (m2 === 4 || m2 === 6 || m2 === 9 || m2 === 11) {
    if (d2 === 31) d2 = 30;
  }
  return `${y2} ${m2} ${d2}`;
}

console.log(getTime(1996, 4, 27, 3)); // 1996 7 26
console.log(getTime(1996, 7, 26, 3)); // 1996 10 25
console.log(getTime(1996, 12, 31, 3)); // 1997 3 30
console.log(getTime(1996, 6, 29, 3)); // 1996 9 28
console.log(getTime(1996, 11, 30, 3)); // 1997 2 28
console.log(getTime(1996, 5, 31, 3)); // 1996 8 30
console.log(getTime(2020, 11, 30, 3)); // 2021 2 28
console.log(getTime(1995, 11, 30, 3)); // 1996 2 29(do 1997 la uruuToshi)
console.log(getTime(2023, 11, 30, 3)); // 2024 2 29(do 2024 la uruuToshi)
console.log("------------------------------");

console.log(getTime(1996, 11, 1, 3)); // 1997 1 31
console.log(getTime(1996, 5, 1, 3)); // 1996 7 31
console.log(getTime(1996, 10, 1, 1)); // 1996 10 31
console.log(getTime(1996, 2, 1, 3)); // 1996 4 30
console.log(getTime(1996, 1, 1, 6)); // 1996 6 30
console.log(getTime(1996, 4, 1, 6)); // 1996 9 30
console.log("------------------------------");

console.log(getTime(1996, 4, 27, 1)); // 1996 5 26
console.log(getTime(1996, 7, 26, 1)); // 1996 8 25
console.log(getTime(1996, 12, 31, 1)); // 1997 1 30
console.log(getTime(1996, 6, 29, 1)); // 1996 7 28
console.log(getTime(1996, 11, 30, 1)); // 1996 12 29
console.log(getTime(1995, 11, 29, 1)); // 1996 12 28
console.log("------------------------------");

console.log(getTime(1996, 4, 27, 6)); // 1996 10 26
console.log(getTime(1996, 7, 26, 6)); // 1997 1 25
console.log(getTime(1996, 12, 31, 6)); // 1997 6 30
console.log(getTime(1996, 6, 29, 6)); // 1996 12 28
console.log(getTime(1996, 11, 31, 6)); // 1997 5 30
console.log(getTime(1995, 11, 31, 6)); // 1996 5 30
