import { Node, LinkedList } from "./linked-list.js";

const linkedList1 = new LinkedList();

linkedList1.append(9); // append(value) - adds new node containing value at end of the list
console.log(linkedList1);

linkedList1.prepend(1); // prepend(value) - adds new node containing value to start of the list
console.log(linkedList1);

console.log(linkedList1.find(9)); // find(value) - returns index of node containing value

console.log(linkedList1.contains(1)); // contains(value) - returns true if the passed in value is in the list

console.log(linkedList1.size()); // size - returns total number of nodes
console.log(linkedList1.head()); // head - returns first node
console.log(linkedList1.tail()); // tail - returns last node

console.log(linkedList1.at(0)); // at(index) - returns the node at the index
linkedList1.pop();
console.log(linkedList1); // pop - removes last element

linkedList1.append(2);

linkedList1.append(3);

linkedList1.append(4);

linkedList1.toString();
