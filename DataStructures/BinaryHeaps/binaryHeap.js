class MaxBinaryHeap {
    // a max binary heap that uses an array to store the node values
    constructor() {
        this.values = [];
    }
    // adds a value in the spot that respects the max heap property
    insert(val) {
        // add the value at the end of the array
        this.values.push(val);

        // initialize last pushed element index and its parent's index
        let index = this.values.length - 1,
            parentIndex = 0;

        // as long as the parent is less than the element and the parent index is positive
        while (this.values[parentIndex] < this.values[index] && parentIndex >= 0) {
            // swap the parent with the element
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];

            // reassign indices for the next iteration
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }

        // return the array that stores the heap
        // each element represents a node in the heap, starting with the root at index 0
        // each element has the child nodes at (2*n) + 1 and (2*n) + 2, where n is its index
        // each element has the parent at the floor division between its index - 1 and 2
        return this.values;
    }
    // removes the highest priority node (the root), places the last element instead
    // and then restructures the array in order to respect the max heap property
    extractMax() {
        // check if heap is empty
        if (!this.values.length) return undefined;

        // swap the root with the last element in the heap
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];

        // extract the old root
        const oldRoot = this.values.pop();

        // initialize indices
        let parent = 0, left = 1, right = 2;

        // initialize maximum value between child nodes
        let maxChildVal = Math.max(this.values[left], this.values[right]);

        // while the parent node value is less than any child node value
        while (this.values[parent] < maxChildVal) {
            // determine which child is more desirable for swapping
            let child = this.values[left] === maxChildVal ? left : right;
            // swap the parent with the child
            [this.values[parent], this.values[child]] = [this.values[child], this.values[parent]];

            // reassign values for indices
            parent = child;
            left = 2 * parent + 1;
            right = 2 * parent + 2;

            // recompute max between child nodes for next iteration
            // added || -Infinity in case right child is out of range but left child isn't
            maxChildVal = Math.max(this.values[left], this.values[right] || -Infinity);
        }
        console.log(this.values);
        // return value of root node
        return oldRoot;
    }
}

const heap = new MaxBinaryHeap();
