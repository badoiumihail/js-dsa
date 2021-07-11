# [Trees](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)

[[Kind of trees]](https://en.wikipedia.org/wiki/List_of_data_structures#Trees)

## What is a tree?

A data structure that consists of nodes in a parent/child relationship.  
They are non-linear data structures, unlike a list, which is linear.

## [Tree terminology](<https://en.wikipedia.org/wiki/Tree_(data_structure)#Terminology>)

- **Root** - the top node in a tree
- **Child** - a node directly connected to another node
- **Parent** - the converse notion of a child
- **Siblings** - a group of nodes with the same parent
- **Leaf** - a node with no children
- **Edge** - the connection between one node and another

<img src = "https://miro.medium.com/max/975/1*PWJiwTxRdQy8A_Y0hAv5Eg.png" width = 700>

## [Binary Trees](https://en.wikipedia.org/wiki/Binary_tree)

In computer science, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. A recursive definition using just set theory notions is that a (non-empty) binary tree is a tuple (L, S, R), where L and R are binary trees or the empty set and S is a singleton set containing the root. Some authors allow the binary tree to be the empty set as well.

<img src = "https://miro.medium.com/max/6300/1*CMGFtehu01ZEBgzHG71sMg.png">

### [Binary Search Trees](https://en.wikipedia.org/wiki/Binary_search_tree)

In computer science, a binary search tree (BST), also called an ordered or sorted binary tree, is a rooted binary tree whose internal nodes each store a key greater than all the keys in the node's left subtree and less than those in its right subtree. A binary tree is a type of data structure for storing data such as numbers in an organized way. Binary search trees allow binary search for fast lookup, addition and removal of data items, and can be used to implement dynamic sets and lookup tables. The order of nodes in a BST means that each comparison skips about half of the remaining tree, so the whole lookup takes time proportional to the binary logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables. Several variants of the binary search tree have been studied.

<img src = "https://courses.engr.illinois.edu/cs225/sp2019/assets/notes/bst/bsttreetraversal.png" width = 600>
