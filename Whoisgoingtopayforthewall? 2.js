// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
//
// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
//
//
//
//
//
//
//
//
//
// function whoIsPaying(name){
//   let array = [name];
//     if(name.length > 2){
//       let str = name.substring(0, 2);
//       array.push(str);
//     }
//    return array;
// }
//
//
// Sample Tests:
// 1
// describe("Basic tests",_=>{
// 2
// Test.assertSimilar(whoIsPaying("Mexico"),["Mexico", "Me"]);
// 3
// Test.assertSimilar(whoIsPaying("Melania"),["Melania", "Me"]);
// 4
// Test.assertSimilar(whoIsPaying("Melissa"),["Melissa", "Me"]);
// 5
// Test.assertSimilar(whoIsPaying("Me"),["Me"]);
// 6
// Test.assertSimilar(whoIsPaying(""), [""]);
// 7
// Test.assertSimilar(whoIsPaying("I"), ["I"]);
// 8
// });
