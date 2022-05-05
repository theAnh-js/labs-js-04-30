/**NUMBER-07: Kiểm tra số đối xứng
Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
Với n thoả điều kiện 1 < n < 1000000
Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
Trả về true nếu đúng, ngược lại trả về false
Ví dụ:
isSymetricNumber(10) --> false
isSymetricNumber(11) --> true
isSymetricNumber(12321) --> true */

import { isSymetricNumber, isSymetricNumberV2 } from "./number-07";

describe('isSymetricNumber(n)', () => {
    test('should return false if n <= 1', () => {
        expect(isSymetricNumber(0)).toBe(false);
        expect(isSymetricNumber(1)).toBe(false);
        expect(isSymetricNumber(-1)).toBe(false);
    });
    test('should return false if n => 1000000', () => {
        expect(isSymetricNumber(1000000)).toBe(false);
        expect(isSymetricNumber(1100000)).toBe(false);
    });
    test('should return false if n is not a symmetric number', () => {
        expect(isSymetricNumber(1234)).toBe(false);
        expect(isSymetricNumber(12334)).toBe(false);
        expect(isSymetricNumber(111122)).toBe(false);
    });
    test('should return true if n is a symmetric number', () => {
        expect(isSymetricNumber(12321)).toBe(true);
        expect(isSymetricNumber(33333)).toBe(true);
        expect(isSymetricNumber(12921)).toBe(true);
        expect(isSymetricNumber(55955)).toBe(true);
    });
});


describe('isSymetricNumber(n)', () => {
    test('should return false if n <= 1', () => {
        expect(isSymetricNumberV2(0)).toBe(false);
        expect(isSymetricNumberV2(1)).toBe(false);
        expect(isSymetricNumberV2(-1)).toBe(false);
    });
    test('should return false if n => 1000000', () => {
        expect(isSymetricNumberV2(1000000)).toBe(false);
        expect(isSymetricNumberV2(1100000)).toBe(false);
    });
    test('should return false if n is not a symmetric number', () => {
        expect(isSymetricNumberV2(1234)).toBe(false);
        expect(isSymetricNumberV2(12334)).toBe(false);
        expect(isSymetricNumberV2(111122)).toBe(false);
    });
    test('should return true if n is a symmetric number', () => {
        expect(isSymetricNumberV2(12321)).toBe(true);
        expect(isSymetricNumberV2(33333)).toBe(true);
        expect(isSymetricNumberV2(12921)).toBe(true);
        expect(isSymetricNumberV2(55955)).toBe(true);
    });
});
