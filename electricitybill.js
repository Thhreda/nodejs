


//electricity bill using IF ELSE IF
const person={
  name:"test Person",
  unitsConsumed:394
}
totalPay= 0;
if(person.unitsConsumed<=20){
  totalPay=50
}else if(person.unitsConsumed<=30){
  totalPay=50+(person.name.unitsConsumed-20)*6.5
}else if(person.unitsConsumed<=50){
  totalPay=50+10*6.5+(person.name.unitsConsumed-30)*8
}else if(person.unitsConsumed<=100){
  totalPay=50+10*6.5+20*8+(person.name.unitsConsumed-50)*9.5
}else if(person.unitsConsumed<=250){
  totalPay=50+10*6.5+20*8+50*9.5+(person.name.unitsConsumed-100)*9.5
}else {
  totalPay=50+10*6.5+20*8+50*9.5+150*9.5+(person.unitsConsumed-250)*11
}
console.log("total amount to be paid is:",totalPay)

