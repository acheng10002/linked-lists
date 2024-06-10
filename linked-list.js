import {
  append,
  prepend,
  size,
  head,
  tail,
  at,
  pop,
  contains,
  find,
  toString,
} from "./methods.js";

class Node {
  constructor() {
    this.value = null;
    this.nexNode = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.append = append;
    this.prepend = prepend;
    this.at = at;
    this.pop = pop;
    this.contains = contains;
    this.find = find;
    this.toString = toString;
  }
}

export { Node, LinkedList };
