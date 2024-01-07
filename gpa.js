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
 */
const student = {
  marksObtained: 500, // Update the marks obtained here
}

let percentage = (student.marksObtained / 800) * 100; // Calculate percentage
console.log("the student precentage is:",percentage)
if (percentage >= 95) {
  console.log("A+");
} else if (percentage >= 90 && percentage < 95) {
  console.log("A-");
} else if (percentage >= 85 && percentage < 90) {
  console.log("A");
} else if (percentage >= 80 && percentage < 85) {
  console.log("B+");
} else if (percentage >= 70 && percentage < 80) {
  console.log("B-");
} else if (percentage >= 60 && percentage < 70) {
  console.log("B");
} else if (percentage >= 50 && percentage < 60) {
  console.log("C");
} else if (percentage >= 45 && percentage < 50) {
  console.log("D");
} else {
  console.log("Fail");
}

//if else
const pranab =
{
  marksObtained: 400, // Update the marks obtained here
}
let percent = (pranab.marksObtained / 800) * 100;
console.log("the percentage of the student is:",percent)
if (percent>=95)
{
  console.log("A+");
}else 
{
if (percent >= 90 && percent < 95)
{
  console.log("A-");
}else{
if (percent >= 85 && percent < 90)
{
   console.log("A");
}else 
{
  if (percent >= 80 && percentage < 85) {
    console.log("B+");
  } else 
  {
    if (percent >= 70 && percent < 80) 
    {
      console.log("B-");
    } else 
    {
      if (percent >= 60 && percent < 70) 
      {
        console.log("B");
      } else 
      {
        if (percent >= 50 && percent < 60) 
        {
          console.log("C")
        } else 
        {
          console.log("fail")
          
        }
        
      }
      
    }
  }
}
}
}



//switch

