# Function Note

## I. Function parameters

- we can use `arguments` in function that return an array of parameters to use.

**Example:**

```javascript
    function test() {
        for( value in arguments) {
            console.log(arguments[value]);
        }
    }

    test(1,2,3,4);
    //result: 1,2,3,4
```

## II. Function call and apply

With the `call()` method, you can write a method that can be used on different objects.

**Example:**

```javascript
    const person = {
        fullName: function() {
        return this.firstName + " " + this.lastName;
    }
    }
    const person1 = {
        firstName:"John",
        lastName: "Doe"
    }
    const person2 = {
        firstName:"Mary",
        lastName: "Doe"
    }

    // This will return "John Doe":
    person.fullName.call(person1);
```

**call() method with arguments:**

```javascript
    const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
    }

    const person1 = {
        firstName:"John",
        lastName: "Doe"
    }

    person.fullName.call(person1, "Oslo", "Norway");
```

- The `apply()` method is the same as `call()`.

- The difference between that 2 method is :

  - The call() method takes arguments separately.

  - The apply() method takes arguments as an array. 

```javascript
    const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
    }   

    const person1 = {
        firstName: "Mary",
        lastName: "Doe"
    }

    // This will return "Mary Doe":
    person.fullName.apply(person1);
```

**difference:**

```javascript
    const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
    }

    const person1 = {
        firstName:"John",
        lastName: "Doe"
    }

    person.fullName.apply(person1, ["Oslo", "Norway"]);
```

- The `apply()` method can use with `Math.max()` or `Math.min()` to apply in array.

**Example:**

```javascript
    const arr = [1,4,24,2];
    Math.max.apply(null,arr); // result: 24
    Math.min.apply(null,arr); // result: 1
```

