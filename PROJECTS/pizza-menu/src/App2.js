function App2() {
  return (
    <div>
      <p id="title">This container is Coded and Designed by me</p>
      <div className="container2">
        <Menu2 />
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
}

function Menu2() {
  return (
    <div className="menu2">
      {pizzaData.map(function (menu) {
        return (
          <div className="menu-box">
            <img
              className="images2"
              src={menu.photoName}
              alt={menu.photoName}
            ></img>
            <div className="menu-content">
              <p>{menu.name}</p>
              <p>{menu.ingredients}</p>
              <p>{menu.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      <pre>{new Date().toLocaleTimeString()} We're currently Open'</pre>
    </footer>
  );
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default App2;
