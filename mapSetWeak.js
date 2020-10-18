// let map1 = new Map();
// map1.set(1);
// map1.set(1);
// map1.set({key:1});
// map1.set({key:1});
// map1.set(2);
// console.log(map1.size);
// for(item of map1.keys()) {
//     console.log(item);
// }

const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

//const iterator1 = map1[Symbol.iterator]();
const iterator1 = map1.keys();
//const iterator1 = map1.entries();
//const iterator1 = map1.values();
map1.set('2', 'two');
for (let item of iterator1) {
  console.log(item);
}