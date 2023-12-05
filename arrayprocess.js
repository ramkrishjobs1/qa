let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet', 'Harry Potter'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]

  //find friends who reads 'Bible'
let bibleFriends = friends.reduce((br, friend) => { 
    console.log(friend.books);
    console.log(friend.books.includes('Harry Potter'));
    if (friend.books.includes('Harry Potter')) br.push(friend);
    return br;
}, []); 

console.debug(...bibleFriends);

//find friends who reads Harry Potter
let harryFriends = friends.filter(friend => friend.books.includes('Harry Potter'));
console.log(...harryFriends);