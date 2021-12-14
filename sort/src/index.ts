import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const linkedList = new LinkedList();
linkedList.add(9);
linkedList.add(1);
linkedList.add(-2);
linkedList.add(4);

const numbersCollection = new NumbersCollection([2, -4, 6, 3]);
numbersCollection.sort();
console.log(numbersCollection.data);
