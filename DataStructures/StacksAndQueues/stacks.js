/**
 * What is a Stack?
 * > An abstract data structure that abides by the LIFO principle.
 *
 * LIFO = Last In First Out
 * > The last element added to the stack will be the first element
 * removed from the stack.
 *
 * BigO:
 * > Insertion - O(1)
 * > Removal - O(1)
 * > Searching - O(n)
 * > Access - O(n)
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        return ++this.size;
    }
    pop() {
        if (!this.head) return null;

        const removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;

        this.size--;

        return removedNode.val;
    }
}

const stack = new Stack();

