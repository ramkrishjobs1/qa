// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  var j = i;
  setTimeout(function() {
    console.log('Index: ' + j + ', element: ' + arr[j]);
  }, 3000);
}

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

//Regular
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(i) {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000, i);
// }

//ES6 
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }