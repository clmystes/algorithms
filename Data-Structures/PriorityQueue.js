class PriorityQueue extends Queue {
  constructor(args = []) {
    super(args);
  }

  enqueue(element, priority) {
    const obj = {element, priority};
    const index = this.items.findIndex(item => item.priority > priority);

    if(index > -1) {
      this.items.splice(index, 0, obj);
    } else {
      this.items.push(obj);
    }
  }
}