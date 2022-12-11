let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]

  //find friends who reads 'Bible'
let bibleFriends = friends.reduce((br, friend) => { 
    console.log(friend.books);
    console.log(friend.books.includes('Bible'));
    if (friend.books.includes('Bible')) br.push(friend);
    return br;
}, []); 

console.log(bibleFriends);