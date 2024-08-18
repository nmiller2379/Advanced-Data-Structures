# Delete a Node with One Child in a Binary Search Tree

Now that we can delete leaf nodes let's move on to the second case: deleting a node with one child. For this case, say we have a tree with the following nodes 1 — 2 — 3 where 1 is the root. To delete 2, we simply need to make the right reference in 1 point to 3. More generally to delete a node with only one child, we make that node's parent reference the next node in the tree.

```plaintext
      1
     / \
    2   3
```

In the example above, we would delete 2 by making 1's right reference point to 3. This is because 2 is the only child of 1. If 2 were the left child of 1, we would make 1's left reference point to 2. If 2 were the root node, we would make the root reference point to 2.

## Coding Challenge

We've provided some code in our `remove` method that accomplishes the tasks from the last challenge. We find the target to delete and its parent and define the number of children the target node has. Let's add the next case here for target nodes with only one child. Here, we'll have to determine if the single child is a left or right branch in the tree and then set the correct reference in the parent to point to this node. In addition, let's account for the case where the target is the root node (this means the parent node will be null). Feel free to replace all the starter code with your own as long as it passes the tests.
