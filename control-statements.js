let action ="add";

//operation
//decision making statement
//if-else
//exp=any boleean


//truthy value
//falsy value
//boolean - true or false 

let exp=null;
if(exp==undefined){
  console.log("I m  inside")//body execute
}else{
  console.log("I m not inside")//execute
}
//== [variable data check] ===[variable data and data type ]


let x=0;


if (x>=10)
{
  var y=20
}
console.log(y);  //20


//nesting



// Create Product object
// Insert name, price and discount in Percentage in the product. 
// Calculate discount amount and after Discount amount only if discount is present
// Assign data back to the product
// Print the data from Product.
// product (name: "", price:.., discount:...)
// calc discountAmt
// product.discountAmount = discountAmt // product.price = product.price discountAmt
// print in js

var product = {
  name: "ExampleProduct",
  price: 100, // Replace with the actual price
  discount: 10, // Replace with the actual discount percentage
};

// Calculate discount amount
let discountAmt = (product.discount / 100) * product.price;

// Apply discount if present
if (discountAmt > 0) {
  product.discountAmount = discountAmt;
  product.price -= discountAmt;
}

// Print the data from Product
console.log(product);


/** calculate GPA  bassed on scores
 * create an obj call students ,assign marks obtained to the student obj 
 * consider 500 as a total
 * calculate GPA
 * the rule for gpa is
 * if plercentage >=95 => A+
 * if plercentage 90<95 => a-
 * if plercentage 85<90 => A
 * if plercentage 80,85 => A+
 * if plercentage >=95 => B+
 * if plercentage >=95 => B-
 * if plercentage >=95 => B
 * if plercentage >=95 => C
 * if plercentage >=95 => D
 * if plercentage <45 => fail
 * 
 * 
 * 
 */
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculatePercentage() {
    const totalMarks = 500;
    const obtainedMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (obtainedMarks / totalMarks) * 100;
    return percentage;
  }

  calculateGPA() {
    const percentage = this.calculatePercentage();

    if (percentage >= 95) {
      return 'A+';
    } else if (percentage >= 90) {
      return 'A-';
    } else if (percentage >= 85) {
      return 'A';
    } else if (percentage >= 80) {
      return 'B+';
    } else if (percentage >= 75) {
      return 'B-';
    } else if (percentage >= 70) {
      return 'B';
    } else if (percentage >= 65) {
      return 'C';
    } else if (percentage >= 60) {
      return 'D';
    } else {
      return 'Fail';
    }
  }
}

// Example usage
const student1 = new Student('John Doe', [90, 80, 85, 95, 92]);

console.log(`Student: ${student1.name}`);
console.log(`Percentage: ${student1.calculatePercentage().toFixed(2)}%`);
console.log(`GPA: ${student1.calculateGPA()}`);


/**
 * calculate tax 
 * developer earns 10000000 per year
 * monthly and yearly tax paid
 * monthly and yearly net salary
 * 
 * tax bracket
 * band 1=>500000=1%
 * band 2=>next200000=> 10%
 * band 3=>next300000=> 20%
 * band 4=>next1000000=> 30%
 * additional ramaining all above 20000000 36% 
 */

class Developer {
  constructor(annualSalary) {
    this.annualSalary = annualSalary;
  }

  calculateTax() {
    let tax = 0;

    // option 1
    if (this.annualSalary > 500000) {
      tax += 500000 * 0.01;
    } else {
      return tax;
    }

    // option 2
    if (this.annualSalary > 700000) {
      tax += (700000 - 500000) * 0.10;
    } else {
      return tax;
    }

    // option 3
    if (this.annualSalary > 1000000) {
      tax += (1000000 - 700000) * 0.20;
    } else {
      return tax;
    }

    // option 4
    if (this.annualSalary > 2000000) {
      tax += (2000000 - 1000000) * 0.30;
    } else {
      return tax;
    }

    // Additional rate for remaining salary above 2000000
    if (this.annualSalary > 20000000) {
      tax += (this.annualSalary - 2000000) * 0.36;
    }

    return tax;
  }

  calculateNetSalary() {
    const tax = this.calculateTax();
    const netSalary = this.annualSalary - tax;

    return {
      monthlyTax: tax / 12,
      yearlyTax: tax,
      monthlyNetSalary: netSalary / 12,
      yearlyNetSalary: netSalary,
    };
  }
}

// Example usage
const developer = new Developer(10000000);
const salaryDetails = developer.calculateNetSalary();

console.log(`Monthly Tax: ${salaryDetails.monthlyTax.toFixed(2)}`);
console.log(`Yearly Tax: ${salaryDetails.yearlyTax.toFixed(2)}`);
console.log(`Monthly Net Salary: ${salaryDetails.monthlyNetSalary.toFixed(2)}`);
console.log(`Yearly Net Salary: ${salaryDetails.yearlyNetSalary.toFixed(2)}`);




