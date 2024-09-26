Calculator Testing Assignment
Objective
The goal of this assignment is to write and complete test cases for a basic calculator program. You will use the testing framework Jest to verify that the calculator methods (addition, subtraction, multiplication, and division) work correctly.

You will be provided with the following files:

calculator.js: This file contains the calculator functions (add, subtract, multiply, and divide).
calculator.test.js: This is the test file that you need to complete by filling in the test cases.
Steps to Complete
1. Understand the Calculator Class
In the calculator.js file, you will find a Calculator class that contains four basic arithmetic operations:

add(a, b): Returns the sum of a and b.
subtract(a, b): Returns the result of a - b.
multiply(a, b): Returns the product of a and b.
divide(a, b): Returns the result of a / b. If b is 0, it should throw an error with the message "Division by zero is not allowed".
2. Write and Complete Test Cases in calculator.test.js
The calculator.test.js file contains a structure for the tests but has missing values. Your job is to:

Fill in the values for each test case for the functions add, subtract, multiply, and divide.
Create edge cases such as division by zero or operations with negative numbers.
Run the tests to verify that your test cases pass.
3. Test Case Example
Each test case follows the format:

javascript
Copy code
test.each([
  [a, b, expected],
])('add(%i, %i) should return %i', (a, b, expected) => {
  expect(calculator.add(a, b)).toBe(expected);
});
For example, in the case of addition:

javascript
Copy code
test.each([
  [1, 2, 3],
  [-1, 5, 4],
  [10, 10, 20],
  [0, 0, 0],
])('add(%i, %i) should return %i', (a, b, expected) => {
  expect(calculator.add(a, b)).toBe(expected);
});
4. Fill the Remaining Test Cases
You need to fill in the correct values for subtraction, multiplication, and division, including handling the special case of division by zero.

Test Case Template for Each Operation
Operation	a	b	Expected Result
Addition			
Subtraction			
Multiplication			
Division			
Division by 0		0	Should throw error
5. Division by Zero Case
Ensure that you handle division by zero correctly. There should be a test case that expects an error when attempting to divide by zero:

javascript
Copy code
test('divide(10, 0) should throw an error', () => {
  expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
});
How to Run Tests
Install the necessary dependencies if they are not already installed:

bash
Copy code
npm install
Run the tests using Jest:

bash
Copy code
npm test
You should see the results of your test cases, showing which tests passed and which ones failed. Make sure all tests pass before submitting your work.

Submission
Complete the calculator.test.js file.
Ensure all tests pass successfully.
Submit the calculator.test.js file along with any additional notes or explanations if necessary.
Good luck!
