const display =()=> {
  console.log ("i am executed only agter 5 sec")
}
const displayFirst =()=> {
  console.log ("i am executed immediately")
}
setTimeout(display,5000)
setTimeout(displayFirst,2000)
console.log("i am first")
console.log("i am 2nd")
console.log("i am 3rd")
console.log("i am 4th")