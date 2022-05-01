function removeKFromList(l, k) {
  while (l.value === k) {
    l = l.next
  }
  let curr = l
  while (curr.next) {
    curr.next.value === k? curr.next = curr.next.next:  curr = curr.next
  }
  return l
}
module.exports = {
  removeKFromList
};