/**
 * What is a Queue?
 * > An abstract data structure that abides by the FIFO principle.
 *
 * FIFO = First In First Out
 * > The first element added to the queue will be the first element
 * removed from the queue.
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

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    enqueue(val) {
        const newNode = new Node(val);

        // nice way to assign same value for multiple variables
        if (!this.first) this.first = this.last = newNode;
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;

        let removedNode = this.first;

        if (this.size === 1) this.first = this.last = null;
        else {
            this.first = removedNode.next;
            removedNode.next = null;
        }

        this.size--;
        return removedNode.val;
    }
}

const queue = new Queue();
