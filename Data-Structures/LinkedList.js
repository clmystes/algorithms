class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  append(element) {
    const node = new Node(element);
    let current = this.head;

    while(current && current.next) {
      current = current.next;
    }
    this.head ? current.next = node : this.head = node;
    this.size += 1;
  }

  removeAt(position) {
    if(position < 0 || position > this.size) { return null; }
    let current = this.head;
    let pre = null;
    if(position === 0) {
      this.head = current.next;
    } else {
      for(let i = 0; i < position; i++) {
        pre = current;
        current = current.next;
      }
      pre.next = current.next;
    }
    this.size -= 1;
    return current.element;
  }

  insert(element, position) {
    if(position < 0 || position > this.size) { return null; }
    let current = this.head;
    let pre = null;
    if(position === 0) {
      this.head = node;
      node.next = current;
    } else {
      for(let i = 0; i < position; i++) {
        pre = current;
        current = current.next;
      }
      pre.next = node;
      node.next = current;
    }
    this.size -= 1;
    return current.element;
  }

  toString() {
    let current = this.head;
    let str = '';

    for(let i = 0; i < this.size; i++) {
      str += current.element;
      current = current.next;
    }
    return str;
  }

  indexOf(element) {
    let current = this.head;
    for(let i = 0; i < this.size; i++) {
      if(element === current.element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }

  getHead() {
    return this.head;
  }
}
