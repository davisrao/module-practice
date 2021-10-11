

import { choice, remove } from "./helpers.js";
import fruit from "./foods.js";

let randFruit = choice(fruit);

console.log(`I'd like one ${randFruit}, please`);
console.log(`Here you go: ${randFruit}`);
console.log('Delicious! May I have another?');

remove(randFruit);

console.log(`I'm sorry, we're all out. We have ${fruit.length} fruits left`);