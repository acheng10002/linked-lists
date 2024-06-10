import { Node, LinkedList } from "./linked-list.js";

function append(value) {
  let newNode = new Node();
  newNode.value = value;
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
}

function prepend(value) {
  let newNode = new Node();
  newNode.value = value;
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
}

function size() {}
function head() {}
function tail() {}
function at(index) {}
function pop() {}
function contains(value) {}
function find(value) {}
function toString() {}

export { append, prepend, size, head, tail, at, pop, contains, find, toString };
