# Javascript ES6 note

## 1.let and const

- let:
  - can use in block scope
  - cannot be redeclared in the same scope
  - must be declared before use

**Example:**

```javascript
    let x = 2;//allowed
    let x = 3;//not allowed
    // x = 2
    {
        let x = 3; //allowed
        let x = 4; //not allowed
        //x = 3
    }
    // x = 2
```

```javascript
    x = 2;
    var x = 3;
    //Using a let variable before it is declared will result in a ReferenceError
```
