//arithmatic + _ / %
//assignment = += -+  %+
//increment or decrement
//comparison     
        //  <,>,<=,>=,!==
//logical
        // &&,!
//string/concatnation
       // +
//conditional
        //(exp)
//spread amd rest operator


let a=10;
let b=3;
const c=a/b;  //exact div   (14 digits in javascript )
const d=a%b;  //remainder

//a=>
a=a+1;  //11
a+=1;   //12
a++;                  //what is function chain?   execution start from inner chain.
++a;
console.log(a++)  //14   post assign
console.log(a)  //15
console.log(++a) //16    pre assign
console.log(a+1)  //17
console.log(a)  //16
console.log(c)


let x=10;
let y='10';
console.log(x<y)   //false
console.log(x<=y) //true
console.log(x==y) //true  compare onlu value
console.log(x===y) //false   comparre the value along with data type

console.log(x!=y)   //F
console.log(x!==y) //T
let name="pranab"
let last="shah"
console.log(name + "  " +last)

//create a js obj dtata to denote one product
// name,price, category,brand
const product={
  name:"iphone",
  price:"1000",
  category:"smartphone",
 brand:"apple"
}
console.log("product Name:"+product.name )
console.log("product price:"+product.price )
console.log("product category:"+product.category )
console.log("product brand:"+product.brand )






