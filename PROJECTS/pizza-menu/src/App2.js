function App2(){
    return(
        <div className = "container2">
            <Menu2 />
        </div>
    )
};

function Menu2(){
    return(
        <div className = "menu2">
            {pizzaData.map(function(menu){
                return(
                    <div className = "menu-box">
                        <img className = "images2" src = {menu.photoName} alt={menu.photoName}></img>
                        <div className = "menu-content">
                            <p>{menu.name}</p>
                            <p>{menu.ingredients}</p>
                            <p>{menu.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
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