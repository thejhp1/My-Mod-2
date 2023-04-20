const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // let dec = '0x' + sha256(key).slice(0,8)
    // return parseInt(dec)
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const newPair = new KeyValuePair(key, value);
    const i = this.hashMod(key);
    if (this.data[i]) {
      throw new Error("hash collision or same key/value pair already exists!");
    } else {
      this.data[i] = newPair;
    }
    this.count++;
    return this;
  }

  insertWithHashCollisions(key, value) {
    const newPair = new KeyValuePair(key, value);
    const i = this.hashMod(key);
    // if (this.data[i]){
    //   let old = this.data[i];
    //   this.data[i] = newPair;
    //   this.data[i].next = old;
    // } else {
    //   this.data[i] = newPair;
    // }
    newPair.next = this.data[i];
    this.data[i] = newPair;
    this.count++;
    return this;
  }

  insert(key, value) {
    // const newPair = new KeyValuePair(key, value);
    // const i = this.hashMod(key);
    // if (!this.data[i]) {
    //   this.data[i] = newPair;
    // } else {
    //   let current = this.data[i];
    //   while (current) {
    //     if (current.key === key) {
    //       current.value = value;
    //       return;
    //     }
    //     current = current.next;
    //   }
    //   newPair.next = this.data[i];
    //   this.data[i] = newPair;
    // }
    // this.count++;

    const i = this.hashMod(key);
    let currKVP = this.data[i];

    // while (currKVP) {
    //   if (currKVP.key === key) {
    //     break;
    //   }
    //   currKVP = currKVP.next;
    // }

    while (currKVP && currKVP.key !== key) {
      currKVP = currKVP.next;
    }

    if (currKVP) {
      currKVP.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);
      newPair.next = this.data[i];
      this.data[i] = newPair;
      this.count++;
      return this;
    }
  }
}

module.exports = HashTable;
