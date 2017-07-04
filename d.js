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
function Car(branch, year){
    this.branch = branch;
    this.year = year;
}
function Employee(name, age, car){
    this.name = name;
    this.age = age;
    this.car = car;
    this.sayHello = function(){    // function namefunction(){}
        console.log("Xin chao toi la : " + this.name + ' | Tuoi: ' + this.age);
    }
    this.incrAge = function(){
        this.age++;
    }
}
const y = new Car('Honda',2017);
// console.log(khoa);
// console.log(khoa.name + ": " + khoa.age);
// console.log(khoa.bike.branch);
const khoa = new Employee("Khoa Pham",30, y);
// const pham = new Employee("Hong Minh", 40);
// console.log(khoa);
// console.log(pham.name);
// khoa.sayHello();
// khoa.incrAge();
// khoa.sayHello();
console.log(khoa.car.branch);