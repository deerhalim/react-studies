import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenteItem(props) {
  const month = props.date.toLocaleString("tr-TR", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("tr-TR", { day: "2-digit" });

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenteItem;
