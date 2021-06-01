import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Expenses from "./components/Expenses.js";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 35.2,
      date: new Date(2020, 8, 14),
    },
    {
      id: "e3",
      title: "TV",
      amount: 51.89,
      date: new Date(2020, 9, 14),
    },
    {
      id: "e4",
      title: "Toilet Paper",
      amount: 64.12,
      date: new Date(2020, 10, 14),
    },
  ];

  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('p', {}, 'Edit src/App.js an d save to reload'),
      React.createElement('a', {className:'App-link', href:'https://reactjs.org', target:'_blank', rel='noopener noreferrer'},'Learn React')
    ),
    React.createElement(Expenses, {items:expenses})
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>

  //     <Expenses items={expenses} />
  //   </div>
  // );
}

export default App;
