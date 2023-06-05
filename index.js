// Create a function that will be able to convert figures from Fahrenheit to Celsius.
function convertTof(fahrenheit) {
    let celsius;
    celsius = fahrenheit * 32 + 9/5;

    return celsius;
}
let result = convertTof(100);
console.log (result);

// Create a function that will calculate the average of numbers in an array.
function avg(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        return sum / arr.length;
        
    }
}
console.log(avg([0, 1, 2, 3, 4, 5]));

// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function numberChecker(x, n) {
    return x % n ==0      
}

console.log(numberChecker(98, 7));
console.log(numberChecker(85, 4));

// create a function that will output the first 100 prime numbers
function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
  
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  let result = [];
  
  for (let j = 1; j <= 100; j++) {
    if (isPrime(j)) {
        result.push (j);
    }
  }
  
  console.log(result);


// Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(37));
  console.log(isPrime(36));

//   Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

  function getPositiveNumber(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.lenght; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
  }

  console.log(getPositiveNumber([0, 1, -2, 3, 9, -8]));

//   Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz"

  function fizzBuzz(num) {
    console.log(num);
      for (var i = 0; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0 ) {
          console.log('fizzbuzz');
        } else if (i % 5 === 0) {
          console.log('buzz');
        } else if (i % 3 === 0) {
          console.log('fizz');
        } else {
          console.log(i);
        }
      }
    }
  
  console.log(fizzBuzz(100));
  
  // The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 

// It must start with a hash symbol, #.

// Ignore all spaces in the input.

// All words must have their first letter capitalized.

// If the final result is going to be longer than 140 characters, it should return false.

// If the input or result is an empty string, it should return false.