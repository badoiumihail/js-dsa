# [Heaps](<https://en.wikipedia.org/wiki/Heap_(data_structure)>)

In computer science, a heap is a specialized tree-based [data structure](https://en.wikipedia.org/wiki/Data_structure) which is essentially an almost complete tree that satisfies the **_heap property_**: in a **max** heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C. In a **min** heap, the key of P is less than or equal to the key of C. The node at the "top" of the heap (with no parents) is called the **root** node.

The heap is one maximally efficient implementation of an [abstract data type](https://en.wikipedia.org/wiki/Abstract_data_type) called a [priority queue](https://en.wikipedia.org/wiki/Priority_queue), and in fact, priority queues are often referred to as "heaps", regardless of how they may be implemented. In a heap, the highest (or lowest) priority element is always stored at the root. However, a heap is not a sorted structure; it can be regarded as being partially ordered. A heap is a useful data structure when it is necessary to repeatedly remove the object with the highest (or lowest) priority.

---

## What is a [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap)?

A common implementation of a heap is the [binary heap](https://en.wikipedia.org/wiki/Binary_heap), in which the tree is a [binary tree](https://en.wikipedia.org/wiki/Binary_tree) (see figure below). The heap data structure, specifically the binary heap, was introduced by J. W. J. Williams in 1964, as a data structure for the [heapsort](https://en.wikipedia.org/wiki/Heapsort) sorting algorithm. Heaps are also crucial in several efficient [graph algorithms](https://en.wikipedia.org/wiki/List_of_algorithms#Graph_algorithms) such as [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm). When a heap is a complete binary tree, it has a smallest possible height—a heap with N nodes and for each node a branches always has log<sub>a</sub>N height.

Very similar to a binary search tree, but with some different rules!  
In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.

Note that, as shown in the graphic, there is no implied ordering between siblings or cousins and no implied sequence for an [in-order traversal](https://en.wikipedia.org/wiki/Tree_traversal#Inorder_traversal) (as there would be in, e.g., a [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)). The heap relation mentioned above applies only between nodes and their parents, grandparents, etc. The maximum number of children each node can have depends on the type of heap.

<img src = "https://upload.wikimedia.org/wikipedia/commons/c/c4/Max-Heap-new.svg" width = 450>
