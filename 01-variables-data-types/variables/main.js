// Ways to declare a variable
// `var`, `let`, & `const`

// let firstName = 'Nguyễn';
// const lastName = 'Đức';
// let age = 20;

// console.log(age);

// Quy ước đặt tên
// - Chỉ chữ cái, số, dấu gạch dưới và ký hiệu đô la
// - Không thể bắt đầu bằng số

// Định dạng nhiều từ
// FirstName = CamelCase
// first_name = gạch dưới
// FirstName = PascalCase
// tên = chữ thường

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
// age = 31;
// console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 5;
console.log(score);

if (true) {
    score = score + 1;
  }
  
  console.log(score);
  
const x = 100;
  // We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [2,8,0,7];
arr.push(9)
console.log(arr);

const person = {
    name: 'Đức',
}

person.name = 'Trung';
person.age = 28
console.log(person)

// Declare multiple values at once
const k = 6, l = 7, j= 8;
console.log(k,l,j);