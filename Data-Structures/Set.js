class _Set {
  constructor() {
    this.items = {};
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if(this.has(value)) {
      return false;
    } else {
      this.items[value] = value;
      return true;
    }
  }

  remove(value) {
    if(this.has(value)) {
      delete this.items[value];
      return true;
    } else {
      return false;
    }
  }

  clear() {
    return this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.keys(this.items);
  }
}
