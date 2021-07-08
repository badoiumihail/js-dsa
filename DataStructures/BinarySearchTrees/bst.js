class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        // Colt said that some people keep track of duplicates in the BST
        this.freq = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // add an element to the tree (iterative implementation)
    insert(val) {
        const newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (currentNode.val === newNode.val) {
                currentNode.freq++;
                return `Incremented node [${currentNode.val}]'s frequency to: ${currentNode.freq}`;
            }
            if (newNode.val < currentNode.val) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                } else currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                } else currentNode = currentNode.right;
            }
        }
    }
    // find an element in the tree
    find(val) {
        if (!this.root) return false;

        let currentNode = this.root;

        while (true) {
            // if value is greater than current node's value move to its right child
            if (val > currentNode.val) {

                // if it exists move to it
                if (currentNode.right) currentNode = currentNode.right;
                // else the element is not in the tree
                else return false;

            // if value is less than current node's value move to its left child
            } else if (val < currentNode.val) {

                // if it exists move to it
                if (currentNode.left) currentNode = currentNode.left;
                // else the element is not in the tree
                else return false;

            // the case in which we find the value
            } else return true;
        }
    }
    // colt's find() solution
    contains(val) {
        if (!this.root) return undefined;

        let current = this.root,
            found = false;

        while (current && !found) {
            if (val > current.val) current = current.right;
            else if (val < current.val) current = current.left;
            else found = true;
        }

        return current ? current : undefined;
    }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(4);
tree.insert(1);
tree.insert(6);
console.log(tree.find(7));
console.log(tree.find(2));
console.log(tree.find(12312));
console.log(tree.contains(7));
console.log(tree.contains(2));
console.log(tree.contains(12312));
console.log(tree);