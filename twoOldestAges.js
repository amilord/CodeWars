// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  let sorted = ages.sort((a,b) => a-b)
  let oldest = sorted.pop()
  let older = sorted.pop()

  return [older, oldest]
}
