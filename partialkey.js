// function partialKeys (obj) {
// // first step is to loop over the properties of the object
// //   second step we need to create all the substring properties on the object and assign them to the value
// // we need to return an object I think?!
//   const newObj = {};

//   Object.keys(obj).sort().reverse().forEach(key =>{
//     const value = obj[key];

//     for(let i=0; i<key.length; i++) {

//       const newKey = key.substring(0, i + 1);

//       newObj[newKey] = value;
//     }
//   });

// //   return newObj;
// // }
// function partialKeys (obj) {
//   return new Proxy(obj, {
//     get: (obj, prop) => {
//       let res = Object.keys(obj).sort().find(key => key.indexOf(prop) === 0);
//       return res ? obj[res] : undefined;
//     }
//   });
// }
