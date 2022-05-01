class Queue {
  constructor() {
    this.HEAD = null;
    this.TAIL = null;
  }
  getUnderlyingList() {
    return this.HEAD;
  }
  enqueue(value) {
    const newElem = {value, next: null};
    if (!this.HEAD) {
      this.HEAD = newElem;
      this.TAIL = newElem;
    } else {
      this.TAIL.next = newElem;
      this.TAIL = this.TAIL.next;
    }
  }  
  dequeue() {
    const firstInQ = this.HEAD.value;
    this.HEAD = this.HEAD.next;
    return firstInQ;
  }
}
module.exports = {
  Queue
};