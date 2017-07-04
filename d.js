// 1. truc tiep
// const khoa = {
//     name: 'Khoa Pham',
//     age : 30,
//     bike : {
//         branch : 'Yamaha',
//         weigth: 100
//     }
// }
//  Khai bao lop doi tuong
// function or class
function Employee(ten, tuoi){
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function(){    // function namefunction(){}
        console.log("Say Hello");
    }
}

// console.log(khoa);
// console.log(khoa.name + ": " + khoa.age);
// console.log(khoa.bike.branch);
const khoa = new Employee("Khoa Pham",30);
const pham = new Employee("Hong Minh", 40);
console.log(khoa);
console.log(pham.name);
khoa.sayHello();
