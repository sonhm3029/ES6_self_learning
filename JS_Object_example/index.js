//SUMARY OBJECT

//Normal define object

//literal define
const obj1 = {
    name:"test object",
    id: 1,
    display: function() {
        console.log("this is a demo object");
    }
}

// define with new keyword
const obj2 = new Object();

obj2.name = "test object";
obj2.id = 2;
obj2.display = function(){
    console.log("this is a demo object too!");
}

//constructor function

function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
}

per1 = new Person("son", 20);
per2 = new Person("huyen", 20);
per1.smile = function() {
    console.log("ahahahaha");
}
per2.smile = function() {
    console.log("hihihih");
}

//object prototype to define properties and method outside the constructor function
Person.prototype.class = "12A";

Person.prototype.setSex = function(_sex) {
    this.sex = _sex;
}

//Test getter and setter

const Student = {
    name: "student",
    set lang(lang) {
        this.language = lang;
    },
    get getName() {
        return this.name;
    }

}

Student.lang = "en";





//Testing
console.log(Person);
console.log(per1);
per1.setSex("male");
per2.setSex("female")
console.log(per1);
console.log(per2);
per1.smile();
per2.smile();
console.log(Student);
console.log(Student.getName);

