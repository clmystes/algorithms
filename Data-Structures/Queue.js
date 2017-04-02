class Queue {
  constructor(args = []) {
    this.items = args;
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(JSON.stringify(this.items));
  }
}