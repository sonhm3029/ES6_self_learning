function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
    this.smile = function () {
        console.log("hahahaha");
    }
}

module.exports = Person;