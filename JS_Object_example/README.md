# Javascript object note

[I. Object definitions](#i-object-definitions)

[II. Object properties](#ii-object-properties)

[III. Object method](#iii-object-method)

[IV. Object Display](#iv-object-display)

[V. Object Accessors](#v-object-accessors)

[VI. Object Constructors](#vi-object-constructors)

[VII. Object prototypes](#vii-object-prototypes)

[VIII. Javascript Map Object](#viii-javascript-map-object)

[IX. JS Set object](#ix-js-set-object)

## I. Object definitions

**Obj syntax, Create an object using literal definition:**

```javascript
    // Literal definition
    const Obj = {
        string_value: "value1",
        num_value: 10,
        boolean_value: true,
        method: function() {
            //this is a obj method
        }
    }
    //or we can

    const Obj = {}
    Obj.string_value = "value1";
    Obj.num_value = 10;
    ...

```

**Create an object using `new Object()`:**

```javascript
    const Obj = new Object();
    Obj.string_value = "value1";
    Obj.num_value = 10;
    ...
```

## II. Object properties

- To take an object properties, there are some ways:

```javascript
    const Obj = {
        name: "son"
    }
    //we can take the 'name' property by:
    //1.
    Obj.name;   //result: son
    //2.
    Obj["name"] //result: son 
    //3.
    const x = "name";
    Obj[x]  //result: son

```

- Adding new properties like we have done in I. Obj definition

- Delete Properties using `delete`:

```javascript
    delete Obj.name;
    delte Obj["name"];
```

**Note: we can define other object or array inside an Object.**

```javascript
    const Obj = {
        name: "son",
        item: [
            {
                name:"gamepad",
                price:"100$"
            },
            {
                name:"guitar",
                price:"200$"
            }]
    }
```

## III. Object method

```javascript
    //2 way to create method
    const Obj = {
        method: function() {
            //this is obj method
        }
    }
    Obj.method2 = function() {
        //this is obj method
    }

    //access method
    Obj.method1();
    Obj.method2();
```

## IV. Object Display

- Object display in `for...in...` loop:

```javascript
    const Obj = {
        name:"son",
        age: 20
    }

    for( x in Obj) {
        console.log(Obj[x]);
    }
    // we must use Obj[x] not Obj.x because x is an variable
```

- We can use `Object.values(obj)` to convert obj to an array

```javascript
    const obj = {
        name: "son",
        age: 20
    }
    var arr = Object.values(obj);
    //result: arr = ['son', 20]
```

- We can use `JSON.stringify(obj)` to convert obj to `string`

```javascript
    var str = JSON.stringify(obj);
    //result: str = "{"name":"son", "age": "20"}"
```

## V. Object Accessors

### 1. Getter and Setter

- Using `get` or `set` with `a_key_word`:

```javascript
    const Obj = {
        name: "son",
        age: 20,
        language: "",
        set lang(lang) {
            this.language = lang;
        }
        get fullName() {
            return "Hoang " + this.name;
        }
    }

    Obj.lang = "vietnam";
    console.log(Obj.fullName);// result: Hoang son

    // Obj = { name:"son", age:20, language: "vietnam", lang: [Setter], fullName: [Getter]}
```

- lang is just a set function, cannot access like `Obj.lang`, it will return undefined
- fullName is treat as a property so we can use `Obj.fullName`. And the `get fullName()` take no parameter. Just return available value of object.

### 2. Object.defineProperty()

The `Object.defineProperty()` method can also be used to add Getters and Setters:

```javascript
    // Define object
    const obj = {counter : 0};

    // Define setters
    Object.defineProperty(obj, "reset", {
        get : function () {this.counter = 0;}
    });
    Object.defineProperty(obj, "increment", {
        get : function () {this.counter++;}
    });
    Object.defineProperty(obj, "decrement", {
        get : function () {this.counter--;}
    });
    Object.defineProperty(obj, "add", {
        set : function (value) {this.counter += value;}
    });
    Object.defineProperty(obj, "subtract", {
        set : function (value) {this.counter -= value;}
    });

    // Play with the counter:
    obj.reset;
    obj.add = 5;
    obj.subtract = 1;
    obj.increment;
    obj.decrement;
    
```

## VI. Object Constructors

- If you have learn OOP in other language, you can see that with an exist class you can create many Object that have the same initial properties.
- In JS Object, we can do that too by using constructor function.

```javascript
    function Obj(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    //now we can create different objects that have the same initial property (name and age)

    const person1 = new Obj("son", 20);
    const person2 = new Obj("huyen", 20);

    // now we can add other properties and method to each object and see that they are different form each other.

    person1.smile = function() {
        console.log("hihih");
    }
    //person2 does not have this method
    person1.cry() {
        console.log("huhu");
    }
    
    person2.smile = function() {
        console.log("hahah");
    }
```

- You can't add properties and method to constructor in the same way as a normal object, you must add inside the constructor function

```javascript
    function Obj(_name) {
        this.name = _name;
        this.method1 = function () {
            //this is method1
        }
    }
```

## VII. Object prototypes

- We can use Object.prototype to add new propeties and method of constructor outside it

```javascript
    function Obj(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    Obj.prototype.class = "12A";
    Obj.prototype.cry = function () {
        console.log("huhuhuh");
    }


    //now we can use

    let per1 = new Obj("son", 20);
    let per2 = newObj("huyen", 20);
    per1.class;//12A
    per2.cry(); //huhuhuh
```

## VIII. Javascript Map Object

- A Map object holds key-value pairs where the keys can be any datatype.

- A Map object remembers the original insertion order of the keys.

- A Map object has a property that represents the size of the map.

**Essensial Map() method:**

Method | Description
-------|------------
new Map() | Creates a new Map object
set() | Sets a value for a key in a Map object
get() | Gets a value for a key in a Map object
entries() | Returns an array of the key/value pairs in a Map object
keys() | Returns an array of the keys in a Map object
values() | Returns an array of the values in a Map object

```javascript
    // Create Objects
    const apples = {name: 'Apples'};
    const bananas = {name: 'Bananas'};
    const oranges = {name: 'Oranges'};

    // Create a new Map
    const fruits = new Map();

    // Add new Elements to the Map
    fruits.set(apples, 500);
    fruits.set(bananas, 300);
    fruits.set(oranges, 200);

    fruits.get(apples);    // Returns 500
    fruits.get("apples");  // Returns undefined

    // Create a new Map
    const fruits = new Map([
        [apples, 500],
        [bananas, 300],
        [oranges, 200]
    ]);
```

Method | Description
-------|------------
clear() | Removes all elements in a Map
delete() | Removes an element specified by a key.
has() | Returns true if a key exists.
forEach() | Invokes a callback for each key/value pair.

## IX. JS Set Object

- A Set is a collection of unique values.

- Each value may occur only once in a Set.

- A Set can hold any values of any data type.

```javascript
    // Create some variables
    const a = "a";
    const b = "b";
    const c = "c";

    // Create a Set
    const letters = new Set();

    // Add the values to the Set
    letters.add(a);
    letters.add(b);
    letters.add(c);


    //or

    // Create a Set
    const letters = new Set();

    // Add some values to the Set
    letters.add("a");
    letters.add("b");
    letters.add("c");

    //or
    // Create a new Set
    const letters = new Set(["a","b","c"]);
```

Method|Description
----------|-------------------------
new Set() | Creates a new Set object
add() | Adds a new element to the Set
clear() | Removes all elements from a Set
delete() | Removes an element specified by its value.
entries() | Returns an array of the values in a Set object
has() | Returns true if a value exists
forEach() | Invokes a callback for each element
keys() | Returns an array of the values in a Set object
values() | Same as keys()
size | Returns the element count|
