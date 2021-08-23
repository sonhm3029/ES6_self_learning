# JS Classes Note

**Syntax:**

```javascript
    class className {
        constructor(arg){
            //this is constructor function
        }
        method1 () {
            //this is an class method
        }
        property = "p1";
        ...
    }
```

## I. Class Inheritance

To create a class inheritance, use the `extends` keyword.

A class created with a class inheritance inherits all the methods from another class:

**Example:**

```javascript
    class Car {
        constructor(brand) {
            this.carname = brand;
        }
        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            this.model = mod;
        }
        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }
```

The `super()` method refers to the parent class.

By calling the `super()` method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

### Getter and setter

Classes also allows you to use `getters` and `setters`.

It can be smart to use `getters` and `setters` for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the `get` and `set` keywords.

```javascript
    class Car {
        constructor(brand) {
            this.carname = brand;
        }
        get cnam() {
            return this.carname;
        }
        set cnam(x) {
            this.carname = x;
        }
    }

    let myCar = new Car("Ford");
```

## II. Class Static

Static class methods are defined on the class itself.

You cannot call a `static` method on an object, only on an object class.

```javascript

    class Car {
        constructor(name) {
            this.name = name;
        }
        static hello() {
            return "Hello!!";
        }
    }

    let myCar = new Car("Ford");

    // You can calll 'hello()' on the Car Class:
    document.getElementById("demo").innerHTML = Car.hello();

    // But NOT on a Car Object:
    // document.getElementById("demo").innerHTML = myCar.hello();
    // this will raise an error.
```

Tham khảo thêm tại:

[Javascript Classes](https://www.w3schools.com/js/js_class_intro.asp)
