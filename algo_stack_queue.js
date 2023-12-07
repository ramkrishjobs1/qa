/*
This problem was asked by Google.

A quack is a data structure combining properties of both stacks and queues.
 It can be viewed as a list of elements written left to right such that 
 three operations are possible:

push(x): add a new item x to the left end of the list
pop(): remove and return the item on the left end of the list
pull(): remove the item on the right end of the list.
Implement a quack using three stacks and O(1) additional memory, 
so that the amortized time for any push, pop, or pull operation is O(1).
*/
class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.
    }

    prepend(data){

    }

    delete(data){

    }
}

let ll = new LinkedList();
ll.append(10);

