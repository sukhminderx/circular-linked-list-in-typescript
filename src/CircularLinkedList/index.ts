import { Node } from "./Node";
/*
  Doesn't have any end
  should prevent traversing infinitely
  Head is permanent node unless inserting at beginning; in which case head moves to new node
  traverse by dummy currNode, till it reaches HEAD again
*/
export class CircularLinkedList {
  head: Node | null;
  constructor() {
    this.head = null;
  }
 
  /*
    construct a node with data
    --IF--
    this.head is null, so 1st node being inserted into Circular Linked List; then node.next to be node itself
    head to be node if 1st node is being added
    --ELSE--
    traverse to nodeBeforeHead using currNode
    node.next = head
    nodeBeforeHead.next to be node
  */
  insertAtBeginning(data: number) {
    const node = new Node(data);
    if(!this.head) {
      node._next = node;
    } else {
      node._next = this.head;
      const nodeBeforeHead = this.traverseAndReturnNodeBeforeHead();
      nodeBeforeHead._next = node;
    }
    this.head = node; // new node to be head
  }

  /*
    construct a node with data
    --IF--
    this.head is null, so 1st node being inserted into Circular Linked List; then node.next to be node itself
    head to be node if 1st node is being added
    --ELSE--
    traverse to nodeBeforeHead using currNode
    node.next = head
    nodeBeforeHead.next to be node
  */
  insertAtEnd(data: number) {
    const node = new Node(data);
    if(!this.head) {
      node._next = node;
      this.head = node; // this becomes head if 1st node is being added
    } else {
      node._next = this.head;
      const nodeBeforeHead = this.traverseAndReturnNodeBeforeHead();
      nodeBeforeHead._next = node;
    }
  }

  /*
    traverse to the nodeBeforeHead
    nodeBeforeHead.next to be this.head.next
    this.head = this.head.next as after deletion of 1st, head moves to 2nd
  */
  deleteFirstNode() {
    const nodeBeforeHead = this.traverseAndReturnNodeBeforeHead();
    nodeBeforeHead._next = (this.head as Node)._next;
    this.head = (this.head as Node)._next;
  }

  /*
    iterate over currentNode starting from head
    last node's next is null
    print each node meanwhile
  */
  traverseAndPrintNode() {
    let currentNode = this.head as Node;
    if (currentNode) {
      while (currentNode.next !== this.head) {
        console.log(currentNode._data);
        currentNode = currentNode.next as Node;
      }
      console.log(currentNode._data);
    }
  }

  /* helper methods */

  /*
    iterate over currentNode starting from head
    last node's next is head again
  */
  traverseAndReturnNodeBeforeHead(): Node {
    // T = O(n)
    let currentNode = this.head as Node;
    while (currentNode.next !== this.head) {
      currentNode = currentNode.next as Node;
    }
    return currentNode;
  }
}
