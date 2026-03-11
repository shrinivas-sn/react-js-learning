import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> Far Away</h1>;
}
function Form() {
  const [description, setDescription] = useState("hello");
  const [quantity, setQuantity] = useState(5);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {description, quantity, packed: false, id: Date.now()}
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-from" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        <option value={1}>1</option>
        <option value={1}>2</option>
        <option value={1}>3</option>
        <option value={1}>3</option>
      </select>
      <input
        type="text"
        placeholder="Item..."
        vlaue={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <ul className="list">
      {initialItems.map(function (item) {
        return (
          <Item
            item={item}
            key={item.id}
            description={item.description}
            id={item.id}
            quantity={item.quantity}
          />
        );
      })}
    </ul>
  );
}
function Item(item) {
  return (
    <div>
      <pre>
        {item.quantity} {item.description} X
      </pre>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed</em>
    </footer>
  );
}

export default App;
