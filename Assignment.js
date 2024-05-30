// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'  

function checkY(str) {
    let foundY = false
    str.toLowerCase().split('').forEach(char => {
      if (char === 'y') {
        foundY = true; 
      }
    })
    return foundY
  }
  
  console.log(checkY("Crazyy"))
  

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

// function getFactorial(num) {
// logic
// return the value;
//  } 

function getFactorial(num) {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    return factorial
}
    console.log(getFactorial(5))


//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },
//   { name: "Daniel", marks: [40, 50, 100, 100] },
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70],
//   },
// ];

// function getHighestAverageStudent() {
    // returns the student name with highest average marks
// }

let studentList = [{
    name: "Mike",
    marks: [80, 50, 60, 100]
}, {
    name: "Daniel",
    marks: [40, 50, 100, 100]
}, {
    name: "Stacy",
    marks: [20, 100, 50, 70]
}]


function getHighestAverageStudent(list) {
    let highestAverage = { name: '', average: 0 };
  
    list.forEach(student => {
      const average = student.marks.reduce((acc, mark) => acc + mark, 0) / student.marks.length
      if (average > highestAverage.average) {
        highestAverage = { name: student.name, average };
      }
    })
  
    return highestAverage
  }
  
console.log(getHighestAverageStudent(studentList)) 




//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4

function findHighestOccurrence(arr) {
    const countObj = arr.reduce((acc, num) => {
        acc[num] = acc[num] === undefined ? 0 : acc[num] + 1
        return acc
    }, {})

    let maxCount = 0
    let maxNum = null

    for (const num in countObj) {
        if (countObj[num] > maxCount) {
            maxCount = countObj[num]
            maxNum = Number(num)
        }
    }

    return maxNum;
}


console.log(findHighestOccurrence([20, 4, -10, 4, 11, 20, 4, 2]))

//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function findUniqueNumber(arr) {
    const countObj = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1
        return acc;
    }, {})

    const uniqueArray = arr.filter(num => countObj[num] === 1)

    return uniqueArray[0]
}


console.log(findUniqueNumber([20, 20, 11, 4, 11, 20, 2, 4]))


//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

function getPalindromes(arr) {

    const palindroms = []    
    arr.forEach(word => {
        const reversedWord  = word.split("").reverse().join("")

        if(word === reversedWord ){
            palindroms.push(word) 
        }
        
    })
    return palindroms
}
console.log(getPalindromes(['abc', 'aba', 'ccc', 'dca', 'a']));


