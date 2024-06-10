import { Node } from "./linked-list.js";

function append(value) {
  // create a new Node instance
  let newNode = new Node();

  // set value property of newNode to value
  newNode.value = value;

  // if the LinkedList object is empty
  if (!this.listHead) {
    // make the newNode the LinkedList's head node
    this.listHead = newNode;

    // also make the newNode the LInkedList's tail node
    this.listTail = newNode;
  } else {
    // if the LinkedList object already has nodes, add the newNode after the existing tail node
    this.listTail.nextNode = newNode;

    // make the newNode the new tail node
    this.listTail = newNode;
  }

  // increment LinkedList's size by 1
  this.listSize++;
}

function prepend(value) {
  // create a new Node instance
  let newNode = new Node();

  // sets value for the value property of the newNode
  newNode.value = value;

  // if the LinkedList object is empty
  if (!this.listHead) {
    // make the newNode its head node
    this.listHead = newNode;

    // also make the newNode its tail node
    this.listTail = newNode;
  } else {
    // moves old head node to be after the newNode
    newNode.nextNode = this.listHead;

    // make the newNode the new head node
    this.listHead = newNode;
  }

  // increment LinkedList's size by 1
  this.listSize++;
}

function at(index) {
  // if the index is less than 0 or greater than the LinkedList's size, return null
  if (index < 0 || index >= this.listSize) {
    return null;
  }

  // start at the head node
  let currentNode = this.listHead;

  // traverse the LinkedList assigning currentNode to the next node
  for (let i = 0; i < index; i++) {
    currentNode = currentNode.nextNode;
  }

  // exit loop when i = index - 1, then currentNode = currentNode.next
  // and currentNode IS the node at the index passed in
  return currentNode;
}

function pop() {
  // if LinkedList is empty, return null
  if (!this.listHead) {
    return null;
  }

  // if LinkedList only has one node
  if (this.listHead === this.listTail) {
    // make the head node null
    this.listHead = null;

    // make the tail node null
    this.nodeTail = null;

    // decrement LinkedList's size by 1
    this.listSize--;
    return;
  }

  // currentNode is the head node
  let currentNode = this.listHead;

  // traverse the LinkedList assigning current node to the next node
  // until currentNode is the second to last node
  for (let i = 1; i < this.listSize - 1; i++) {
    currentNode = currentNode.nextNode;
  }

  // make the last node null
  currentNode.nextNode = null;

  // make the currentNode, what was formerly the second to last node, the new tail node
  this.listTail = currentNode;

  // decrement the LinkedList's size by 1
  this.listSize--;
}

function contains(value) {
  // make the head node the currentNode
  let currentNode = this.listHead;

  // traverse through the LinkedList
  for (let i = 0; i < this.listSize; i++) {
    // if value matches the value property of the currentNode, return true
    if (currentNode.value === value) {
      return true;
    }

    // otherwise, keep traversing, assigning currentNode to the next node
    currentNode = currentNode.nextNode;
  }

  // return false if no match found
  return false;
}

function find(value) {
  // make the head node the currentNode
  let currentNode = this.listHead;

  // initialize the index to 0
  let index = 0;

  // traverse through the LinkedList
  for (let i = 0; i < this.listSize; i++) {
    // if value matches the value property of the currentNode, return indx
    if (currentNode.value === value) {
      return index;
    }

    // otherwise, keep traversing, assigning currentNode to the next node
    currentNode = currentNode.nextNode;
    index++;
  }

  // return null if no match found
  return null;
}

function toString() {
  // make the head node the currentNode
  let currentNode = this.listHead;

  // initialize string
  let string = "";

  // traverse through the LinkedList
  for (let i = 0; i < this.listSize; i++) {
    // make the value of the currentNode the valueToPrint
    let valueToPrint = currentNode.value;

    // if currentNode is the head node, represents the head node's value as a string with ->
    if (currentNode === this.head) {
      string = `(${valueToPrint}) -> `;

      // if not, take string from last iteration and concatenate the currentNode's value as a string
    } else {
      string = string.concat(`(${valueToPrint}) -> `);
    }

    // keep traversing, assigning currentNode to the next node
    currentNode = currentNode.nextNode;
  }

  // after traversing all the nodes, concatenate the string 'null' to string
  string = string.concat(`null`);

  // print the string
  console.log(string);
  return string;
}

export { append, prepend, at, pop, contains, find, toString };
