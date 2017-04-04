class HashTable {
  constructor() {
    this.table = [];
  }

  static loseloseHashCode(key) {
    const keys = key.split('');
    return keys.reduce((ac, cv) => ac + cv.charCodeAt(0), 5381)
  }

  put(key, value) {
    const position = HashTable.loseloseHashCode(key);
    return this.table[position] = value;
  }

  remove(key) {
    const position = HashTable.loseloseHashCode(key);
    return this.table[position] = undefined;
  }

  get(key) {
    const position = HashTable.loseloseHashCode(key);
    return this.table[position];
  }
}
