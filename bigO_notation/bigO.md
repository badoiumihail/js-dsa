# Big O notation

<img src="https://i.ibb.co/mCcfh49/Screenshot-2021-06-22-at-13-07-26.png" alt="bigOgraph" width="400"/>

**_Big O Notation_** is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

---

## Simplifying Big O Expressions

When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

These rules of thumb are consequences of the definition of big O notation:

1. Constants don't matter

   - O(2n) ---> O(n) - linear
   - O(5000) ---> O(1) - constant
   - O(13n<sup>2</sup>) ---> O(n<sup>2</sup>) - quadratic

2. Smaller terms don't matter

   - O(n<sup>2</sup> + 5n + 8) ---> O(n<sup>2</sup>) - quadratic

### Big O Shorthands

1. Arithmetic operations are _roughly_ constant
2. Variable assignment is _roughly_ constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop multiplied with the complexity of whatever happens inside of the loop

---

## Space Complexity

So far, we've been focusing on **_time complexity_**: > How can we analyze the _runtime_ of an algorithm as the size of the inputs increases?

We can also use big O notation to analyze **_space complexity_**: > How much additional memory do we need to allocate in order to run the code in our algorithm?

### What about the inputs?

Sometimes you'll hear the term **auxiliary space complexity** to refer to space required by the algorithm, **_not_** including space taken up buy the _inputs_.

Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

### Rules of thumb

1. Most primitives (booleans, numbers, undefined, null) are **_constant_** space
2. Strings require **O(n)** space (where _n_ is the string length)
3. Reference types are generally **O(n)**, where _n_ is the length (for arrays) or the number of keys (for objects)
