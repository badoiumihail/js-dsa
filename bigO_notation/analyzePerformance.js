// example of an object in JavaScript
let members = {
    firstName: 'Kelly',
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

/**
 * Objects should be used when order is irrelevant,
 * and fast access, insertion and removal of elements is needed.
 *
 * BigO for Objects:
 *  Insertion -> O(1)
 *  Removal -> O(1)
 *  Searching -> O(n) (Not the same as accessing, rather checking to see if a given piece of information is in a value somewhere)
 *  Access -> O(1)
 *
 * BigO for Object Methods:
 *  Object.keys -> O(n)
 *  Object.values -> O(n)
 *  Object.entries -> O(n)
 *  hasOwnProperty -> O(1)
 */

// example of an array (ordered list) in JavaScript
let names = ['Michael', 'Melissa', 'Andrea'];
let values = [true, {}, [], 2, 'awesome'
];

/**
 * Arrays should be used then you need the elements in order,
 * and you still want to have fast access, insertion and removal (sort of..)
 *
 * BigO for Arrays:
 *  Insertion -> It depends
 *      • if PUSHING (adding to the end of the array) it'll result in constant time O(1)
 *      • if adding an element at the start of the element, we have to shift every element's index by 1 => O(n)
 *  Removal -> It depends
 *      • same logic as above, removing at the end (pop) => O(1), removing at the start => O(n)
 *  Searching -> O(n)
 *  Access -> O(1)
 *
 * BigO for Array Methods:
 *  push -> O(1)
 *  pop -> O(1)
 *  shift -> O(n) * removes an element from the start of the array, and returns it
 *  unshift -> O(n) * adds an element to the start of the array
 *  concat -> O(n) * the extend() from python
 *  slice -> O(n)
 *  splice -> O(n)
 *  sort -> O(n log n)
 *  forEach/map/filter/reduce/etc. -> O(n)
 */

console.log(`Keys: ${Object.keys(members)}\nValues: ${Object.values(members)}\nEntries: ${Object.entries(members)}\n`);
console.log(`hasOwnProperty(): ${members.hasOwnProperty("firstName")}\n`);

// forEach loop
Object.entries(members).forEach(entry => {
    console.log(entry);
});
