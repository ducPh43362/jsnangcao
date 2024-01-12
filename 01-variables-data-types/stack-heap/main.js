// Value is stored in the stack
const name = 'Đức';
const age = 20;


let newName = name;
newName = 'Hai ảnh';

// console.log(name,newName)


// Reference is stored in the heap
const person = {
    name: 'Chi',
    age: 30,
};
let newPerson = person;
newPerson.name = 'Mai chi';

console.log(person,newPerson);