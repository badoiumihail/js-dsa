class Node {
    constructor(val) {
        // every node in a singly linked list has a value
        // and a reference to the next node in the list
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // adds an item at the end of the list
    push(val) {
        const newNode = new Node(val);

        // if the list is empty
        if (this.head === null) {

            // assign head and tail to the 1st created node
            this.head = newNode;
            this.tail = this.head;
        } else { // if there are already nodes in the list

            // point the old tail node to the new node
            this.tail.next = newNode;
            // and then assign tail to the new node
            this.tail = newNode;
        }

        // increment length of list by 1 since we've added a new node
        this.length++;
        // return the linked list so far
        return this;
    }
    // removes an item from the end of the list
    pop() {
        // if list is empty return undefined
        if (this.head === null) return undefined;

        // start at the head
        let currentNode = this.head,
            newTail = currentNode;

        // traverse list and store last and second to last item
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }

        // assign the tail to the second to last item
        this.tail = newTail;
        // severe the link between second to last and last item
        this.tail.next = null;
        // update list length
        this.length--;
        // address the case in which we pop the last remaining element from the list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // return the value of the popped item
        return currentNode;
    }
    // removes an item from the start of the list
    shift() {
        if (this.head === null) return undefined;

        const currentHead = this.head;
        const newHead = currentHead.next;
        this.head = newHead;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currentHead;
    }
    // adds an item at the start of the list
    unshift(val) {
        const newNode = new Node(val);
        if (this.head === null) this.tail = newNode;
        else newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
    // returns the value at given index
    get(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        let node = this.head;
        for (let i = 1; i < index + 1; i++) {
            node = node.next;
        }
        return node;
    }
    // updated the value at given index with the given value
    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }
    // inserts a new node at the given index
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        //  here we double negate the return value of unshift() which is the list
        //  resulting in a return value of true (if it worked) or false (if it didn't)
        // so basically convert the return into a boolean
        if (index === 0) return !!this.unshift(val);
        else if (index === this.length) return !!this.push(val);
        else {
            // get the previous node
            const preNode = this.get(index - 1);
            // if we need to insert in the middle of two existing nodes
            // create a new node and link it accordingly
            const newNode = new Node(val);
            // link the new node to the old next reference from the node at index - 1
            newNode.next = preNode.next;
            // link node at index - 1 to new node
            preNode.next = newNode;

            // update the list length
            this.length++;
        }

        return true;
    }
    // removes the node at the given index
    remove(index) {
        if (index < 0 || index > this.length - 1) return false;
        if (index === 0) return this.shift();
        else if (index === this.length - 1) return this.pop();
        else {
            const preNode = this.get(index - 1);
            const removedNode = preNode.next;
            preNode.next = removedNode.next;

            // update the list length
            this.length--;
            return removedNode;
        }
    }
    // reverse the list in place (my approach)
    reverse() {
        let currentNode = this.head,
            prevNode = currentNode,
            tmpLink = currentNode.next;

        for (let i = 0; i < this.length; i++) {
            if (i === 0) {
                this.tail = currentNode;
                currentNode.next = null;
                currentNode = tmpLink;
            } else if (i === this.length - 1) {
                this.head = currentNode;
                currentNode.next = prevNode;
            } else {
                tmpLink = currentNode.next;
                currentNode.next = prevNode;
                prevNode = currentNode;
                currentNode = tmpLink;
            }
        }
        return this;
    }
    // reverse the list in place (colt's solution)
    reversed() {
        let node = this.head,
            next = node.next,
            prev = null;
        this.head = this.tail;
        this.tail = node;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    // pushes all the elements into an array and prints it
    print() {
        let arr = [],
            current = this.head;
        for (let i = 0; i < this.length; i++) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new SinglyLinkedList();
