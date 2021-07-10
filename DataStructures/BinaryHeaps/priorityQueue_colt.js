class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        console.log(this.values);
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let pQueue = new PriorityQueue();
pQueue.enqueue('heavy rain', 3);
pQueue.enqueue('cataclysm', 0);
pQueue.enqueue('hurricane', 1);
pQueue.enqueue('wildfire', 2);
pQueue.enqueue('low temperature', 4);
pQueue.enqueue('mild heat', 5);
pQueue.enqueue('extreme heat', 3);
pQueue.enqueue('apocalypse', 0);
pQueue.enqueue('violent riot', 2);
pQueue.enqueue('mild rain', 5);
pQueue.enqueue('something with priority 1', 1);
console.log(pQueue);
console.log('###############################################');
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
