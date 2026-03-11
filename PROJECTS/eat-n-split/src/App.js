import { useState } from "react";

const friends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [showAddFriend, setShowAddFriend] = useState(true);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="app">
      hi
      <FriendsList />
      {showAddFriend && <FormAddFriend />}
      <Button onClick={handleShowAddFriend}>
        {showAddFriend ? "Close" : "Add Friend"}
      </Button>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  return (
    <ul>
      {friends.map(function (friend) {
        return (
          <Friend
            name={friend.name}
            image={friend.image}
            id={friend.id}
            balance={friend.balance}
          />
        );
      })}
    </ul>
  );
}

function Friend(friend) {
  return (
    <div>
      <img src={friend.image} alt={friend.image}></img>
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}rs
        </p>
      )}
      {friend.balance === 0 && <p>You owe {friend.name} Nothing</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ows you {friend.balance}rs
        </p>
      )}
      <Button>Select</Button>
    </div>
  );
}
function FormAddFriend() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <form className="form-add-friend">
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <button className="button">Add Friend</button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>Bill value</label>
      <input type="text"></input>
      <label>Your expense</label>
      <input type="text"></input>
      <label>X's expense'</label>
      <input type="text" disabled></input>
      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="user">X</option>
      </select>
    </form>
  );
}
export default App;
