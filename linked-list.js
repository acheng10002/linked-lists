import {
  append,
  prepend,
  at,
  pop,
  contains,
  find,
  toString,
} from "./methods.js";

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.listSize = 0;
    this.listHead = null;
    this.listTail = null;
    this.append = append;
    this.prepend = prepend;
    this.at = at;
    this.pop = pop;
    this.contains = contains;
    this.find = find;
    this.toString = toString;
  }

  size() {
    // LinkedList class maintains a size property, so simply return it
    return this.listSize;
  }

  head() {
    // LinkedList class maintains a head property, so simply return it
    return this.listHead;
  }

  tail() {
    // LinkedList class maintains a tail property, so simply return it
    return this.listTail;
  }
}

export { Node, LinkedList };
