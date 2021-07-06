class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // adds an element to the end of the list and returns the updated list
    push(val) {
        // create the new node with the input value
        const newNode = new Node(val);

        // if the list is empty set the pushed value to be the head as well
        if (this.length === 0) {
            this.head = newNode;
        } else {
            // create the bonds between the old tail and the new node
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        // set the new node as the tail
        this.tail = newNode;

        // update the list length
        this.length++;

        // return the updated list
        return this;
    }
    // removes an element from the end of the list and returns it
    pop() {
        // if there are no elements in the list that can be popped
        if (this.length === 0) return undefined;

        // store the old tail in a variable
        const oldTail = this.tail;

        // if there are no elements remaining
        // update the head and the tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the tail
            this.tail = oldTail.prev;

            // sever the bond between the nodes
            this.tail.next = null;
            oldTail.prev = null;
        }

        // update the list length
        this.length--;

        // return the old tail node
        return oldTail;
    }
    // removes an element from the start of the list and returns it
    shift() {
        // if there are no elements in the list that can be shifted
        if (this.length === 0) return undefined;

        // store the old head in a variable
        const oldHead = this.head;

        // if there are no elements remaining
        // update the head and the tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the head
            this.head = oldHead.next;

            // sever the bond between the nodes
            this.head.prev = null;
            oldHead.next = null;
        }

        // update the list length
        this.length--;

        return oldHead;
    }
    unshift(val) {
        // create the new node with the input value
        const newNode = new Node(val);

        // if the list is empty set the new value as the tail as well
        if (this.length === 0) {
            this.tail = newNode;
        } else {
            // create the bonds between the old head and the new node
            this.head.prev = newNode;
            newNode.next = this.head;
        }

        // set the new node as the head
        this.head = newNode;

        // update the list length
        this.length++;

        // return the updated list
        return this;
    }
    get(index) {
        // if the index is out of range return undefined
        if (index < 0 || index > this.length - 1 || typeof index !== 'number') return undefined;

        // declare a variable in which we will store the designated node
        let node;

        // if index is closer to the tail start from there
        if (index > Math.floor(this.length / 2)) {
            node = this.tail;

            // iterate backwards through the list
            for (let i = this.length; i > index + 1; i--)
                node = node.prev;
        } else {
            // start from the head
            node = this.head;

            // iterate forward through the list
            for (let i = 1; i < index + 1; i++)
                node = node.next;
        }
        // return the node at given index
        return node;
    }
    set(index, val) {
        // if index out of range return false
        if (index < 0 || index > this.length - 1 || typeof index !== 'number') return false;

        // get the node at the given index
        const node = this.get(index);

        // if a node was found update its value and return true
        if (node) {
            node.val = val;
            return true;
        }
        // if no node was found return false
        return false;
    }
    // inserts node with given value at given index, returns true or false depending
    // on the result of the operation
    insert(index, val) {
        if (index < 0 || index > this.length || typeof index !== 'number') return false;

        if (index === this.length) return !!this.push(val);
        else if (index === 0) return !!this.unshift(val);
        else {
            // new node to insert
            const newNode = new Node(val);

            // get node at index-1
            const prevNode = this.get(index - 1);

            // connect the nodes accordingly
            prevNode.next.prev = newNode;
            newNode.next = prevNode.next;
            newNode.prev = prevNode;
            prevNode.next = newNode;

            // update list length
            this.length++;
        }
        return true;
    }
    // removes a node at a given index and returns it
    remove(index) {
        if (index < 0 || index > this.length - 1 || typeof index !== 'number') return undefined;

        // declare variable to store the node that needs to be removed
        let removedNode;

        if (index === this.length - 1) return this.pop();
        else if (index === 0) return this.shift();
        else {
            // find the node at given index
            removedNode = this.get(index);

            // connect the nodes accordingly
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.next = null;
            removedNode.prev = null;

            // update list length
            this.length--;
        }
        // return the removed node
        return removedNode;
    }
    // reverses the list in-place
    reverse() {
        let currentNode = this.head,
            tmpNode;

        this.head = this.tail;
        this.tail = currentNode;

        for (let i = 0; i < this.length; i++) {
            tmpNode = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = tmpNode;
            currentNode = tmpNode;
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

const list = new DoublyLinkedList();
