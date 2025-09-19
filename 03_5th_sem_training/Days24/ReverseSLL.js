class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
let newHead = reverseList(head);
while (newHead) { console.log(newHead.val); newHead = newHead.next; }
