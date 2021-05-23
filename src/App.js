import logo from "./logo.svg";
import "./App.css";

import ExpenteItem from "./components/ExpenseItem";

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ExpenteItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenteItem>
       <ExpenteItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenteItem>
       <ExpenteItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenteItem>
       <ExpenteItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenteItem>
    </div>
  );
}

export default App;
