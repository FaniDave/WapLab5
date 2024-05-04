//1.Create a function using function declaration named sum with one parameter of Array type, the
//returned result is the sum of all elements which are greater than 20.
function sum(arr) {
    if (!Array.isArray(arr)) return arr + " is not an array";
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let arr1 = [1, 2, 3, 4, 5];
console.log(sum(arr1));

//2. Create a function using function expression named getNewArray with one parameter of String
//Array, return a new array which contains all string, length is greater than and equal to 5, and
//contains letter ‘a’.
let getNewArray = function (arr) {
    if (!Array.isArray(arr)) return arr + " is not an array";
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i].charAt(j) == 'a') newArr.push(arr[i]);
            }
         }
    }
    return newArr;
}
let arr2 = ["faniel", "sirak", "dina", "peter", "asmina"];
console.log(getNewArray);

//3. Implement an arrow function with feature below:
//concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']
let emptyArr = [];
let myFunction = (...rest) => emptyArr.concat(...rest);
console.log(myFunction("hi", [1, 2, 3], ["Hello", "world"]));

//4.  For the given students array below, compute the average grade of all students
//who took cs303 course which returns an object which key is students' names, values is the average.
//Example of result:
//{Quincy: 93.5,
   //Sam: 86.5,
//Katie: 71.5}
    const students = [
      { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },

      { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },

      { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },

      { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },

      { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
];

const stu303Course = students.filter(obj => {
    return obj.courses.includes("cs303");
});

const nameAndAverage = stu303Course.reduce((accu, obj) => {
    const sum = obj.grades.reduce((accu, grade) => {
        return accu + grade;
    }, 0);
    const average = sum / obj.grades.length;
    return {...accu, [obj.name]: average};
}, {})

console.log(nameAndAverage);
