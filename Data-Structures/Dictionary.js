class Dictionary {
  constructor() {
    this.items = {};
  }

  has(key) {
    return this.items.hasOwnProperty(key);
  }

  set(key, value) {
    return this.items[key] = value;
  }

  delete(key) {
    if(this.has(key)) {
      delete this.items[key];
      return true;
    } else {
      return false;
    }
  }

  get(key) {
    return this.items[key];
  }

  values() {
    return Object.values(this.items);
  }

  clear() {
    return this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }
}