function getSum(a,b){
  let arr = []
  for(let i = b; i <= a; i++){
    arr.push(i)
  }
  for(let i = a; i <= b; i++){
    arr.push(i)
  }
  if(a === b){
    return a
  }
  else {
    return arr.reduce((x,y) => x + y)
    }
}
