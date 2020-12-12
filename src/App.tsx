import React from "react";
import logo from "./logo.png";
import "./App.css";
import { CircularLinkedList } from "./CircularLinkedList";

function App() {
  /* below contains Circular Linked List ADT */
  // create the linked list
  const linkedList = new CircularLinkedList();

  // add 1 to beginning
  linkedList.insertAtBeginning(1);
  // add some items 2,3,4 to the end
  linkedList.insertAtEnd(2);
  linkedList.insertAtEnd(3);
  linkedList.insertAtEnd(4);

  console.log('after insertAtEnd');
  linkedList.traverseAndPrintNode();

  // add 0 to beginning
  linkedList.insertAtBeginning(0);

  console.log('after insertAtBeginning');
  linkedList.traverseAndPrintNode();

  // delete first
  linkedList.deleteFirstNode();

  console.log('after deleteFirstNode');
  linkedList.traverseAndPrintNode();

  /* above contains Circular Linked List ADT */

  /* ------------------------------------- */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Circular Linked List ADTS... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
