# Stacks and Queues

## Questions

3.1 Three in One: Describe how you could use a single array to implement three stacks.  

3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.

3.3 Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).
FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

3.5 Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first out" basis. People must adopt either the"oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in Linked list data structure.

3.6 Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

3.7 Implement a Queue class from scratch with an existing bug, the bug is that it cannot take more than 5 elements.

3.8 Write an algorithm to determine if all of the delimiters in an expression are matched and closed.
E.g. {ac[bb]}, [dklf(df(kl))d]{} and {[[[]]]} are matched. But {3234[fd and {df][d} are not.
