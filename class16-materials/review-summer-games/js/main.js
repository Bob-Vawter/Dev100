//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
function prodAll (a1) {
  let prod = 1
  a1.forEach((item, i) => {prod*=item})
  alert(prod)
}

let t1 = [123,3,123,1,4,213]
let t2 =[0,1233,12,3,123124,4]
let t3 = [1,5,21,2]

prodAll(t1)
prodAll(t2)
prodAll(t3)
