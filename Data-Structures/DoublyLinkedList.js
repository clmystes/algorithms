class Node {
  constructor(element) {
    this.element = element;
    this.pre = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  append(element) {
    const node = new Node(element);
    let current = this.head;

    while(current && current.next) {
      current = current.next;
    }
    if(this.head) {
      current.next = node;
      node.pre = current;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
    this.size += 1;
  }

  removeAt(position) {
    if(position < 0 || position > this.size) { return null; }
    let current = this.head;
    let pre = null;
    let index = 0;

    if(position === 0) {
      this.head = current.next;
      this.size === 1 ? this.tail = null : current.pre = null;
    } else if(position === this.size - 1) {
      current = this.tail;
      this.tail = current.pre;
      current.next = null;
    } else {
      while(index++ < position) {
        pre = current;
        current = current.next;
      }
      pre.next = current.next;
      current.next.pre = pre;
    }
    this.size -= 1;
    return current.element;
  }

  insert(element, position) {
    if(position < 0 || position > this.size) { return null; }
    const node = new Node(element);
    let current = this.head;
    let pre = null;
    let index = 0;

    if(position === 0) {
      if(!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.head = node;
        node.next = current;
        current.pre = node;
      }
    } else if(position === this.size) {
      current = this.tail;
      this.tail = node;
      node.pre = current;
      current.next = node;
    } else {
      while(index++ < position) {
        pre = current;
        current = current.next;
      }
      node.next = current;
      pre.next = node;
      node.pre = pre;
      current.pre = node;
    }
    this.size += 1;
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
