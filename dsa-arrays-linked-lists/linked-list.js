/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    this.tail = newNode;
    if (this.tail !== null) newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === null) {
      return undefined;
    }
    let currentNode = this.head;
    let secondToLastNode = this.head;

    while (currentNode.next) {
      secondToLastNode = currentNode;
      currentNode = currentNode.next;
    }
    secondToLastNode.next = null;
    this.tail = secondToLastNode.next;
    this.length -= 1;
    if (this.length === null) {
      this.head = null;
      this.tail = null;
      return currentNode;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === null) {
      return undefined;
    } else {
      const nodeToRemove = this.head
      this.head = this.head.next;
      this.length -= 1;

      if (this.length === null) {
        this.tail = null;
      }
      return nodeToRemove;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null) {
      if (count === idx) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    return undefined;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let cur = this.getAt(idx);
    cur.val = val;
    return cur.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let previous = this.getAt(idx - 1);
    let newNode = new Node(val);
    newNode.next = previous.next;
    previous.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }
    let previous = this.getAt(idx - 1);

    if (idx === this.length - 1) {
      let val = previous.next.val;
      previous.next = null;
      this.tail = previous;
      this.length -= 1;
      return val;
    }

    let val = previous.next.val;
    previous.next = previous.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let currentNode = this.head;

    while (currentNode) {
      total += currentNode.val;
      currentNode = currentNode.next
    }
    return total / this.length;

  }
}

module.exports = LinkedList;
