# Javascript Continue

## Phạm vi (scope) của biến

### block scope (khối)

biến được **khai báo** trong **cặp ngoặc nhọn**

* var: không bị giới hạn bởi cặp ngoặc nhọn

* let/const: bị giới hạn bỏi cặp ngoặc nhọn. Ra ngoài bị undefined

### function scope (hàm)
biến được **khai báo** trong **hàm**, cả var/let/const **ra ngoài hàm** đều bị **undefined**

### toàn cục (global)
biến được khai báo ở **một dòng code tự do** không nằm trong **khối** hay **hàm**

## break & continue

### break
dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức 
### continue
dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo

## Câu điều kiện nâng cao

* câu điều kiện `if...else`
* câu điều kiện `if...else if`

## Vòng lặp nâng cao
* `for..in` : duyệt qua các thuộc tính của một object
* `forEach` : một method của array để thực thi 1 function cho mỗi phần tử. **Không thể dùng break hay continue**
```
const numbers = [1,2,3,4,5];
numbers.forEach(function(value){
    console.log(value);
});
```
## Utils functions
là những hàm có sẵn trong javascript, giúp code nhanh và gọn hơn

### String Utils
* Bỏ khoảng trắng
    * `trim()`
    * `trimStart()`
    * `trimEnd()`
* Chuyển đổi chữ HOA <-> thường
    * `toUpperCase()`
    * `toLowerCase()`
* Kiểm tra chuỗi có bao gồm chuỗi con không
    * `include("")`, trả về true/false; có phân biệt chữ HOA và thường
* Cắt chuỗi `split()`
* Thay thế chuỗi con bằng chuỗi con khác `replace()`
```
let text = "Hello World";

console.log(text.replace("World","Javascript"));
```


### Array Utils
* Thêm phần tử vào mảng (push, unshift, splice)
    * Thêm vào cuối `push(<phần tử>)` 
    * Thêm vào đầu  `unshift(<phần tử>)` 
    * Thêm vào giữa `splice(<vị trí>, <số phần tử cần xóa>, <phần tử cần thêm vào>)`
* Xóa phần tử khỏi mảng (pop, shift, splice)
    * Xóa đầu `pop()`
    * Xóa cuối `shift()`
    * Xóa ở vị trí bất kỳ `splice(<vị trí>, <số phần tử cần xóa>)`
* Tìm kiếm (find, filter)
    * Trả về phần tử đầu tiên hợp lệ `pop()`
    * Trả về tất cả phần tử hợp lệ `shift()`
```
let numbers = [5, 12, 8, 130, 44]

// find() - Trả về phần tử đầu tiên > 10
let first = numbers.find(num => num > 10);
consolo.log(first);
// 12

// filter() - Trả về tất cả phần tử > 10
let all = numbers.filter(num => num > 10);
console.log(all);
//[12, 130, 44]
```
* Biến đổi mảng (map)

map tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
```
let numbers = [1,2,3,4,5];

let doubled = numbers.map(num => num * 2);
console.log(doubled);
//[2,4,6,8,10]
```
* Sắp xếp mảng (sort)
`sort((a,b) => a - b)`
    * so sánh từng cặp phần tử a và b
    * trả về số âm, a đứng trước b
    * trả về số dương, b đứng trước a    
    * trả về số 0, giữ nguyên thứ tự
```
let number = [40,100,1,5,25,10];

// Sắp xếp tăng dần
numbers.sort((a,b) => a - b);
console.log(numbers);
//[1, 5, 10, 25, 40, 100]

// Sắp xếp giảm dần
numbers.sort((a,b) => b - a);
console.log(numbers);
//[100, 40, 25, 10, 5, 1]
```