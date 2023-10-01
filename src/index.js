import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

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

function App() {
    return (
        <div className='container'>
          <Header/>
          <Menu/>
          <Footer/>
        </div>
      )
}

function Menu() {
  return (
      <menu className='menu'>
        <h2>Our Menu</h2>
        <>
          <p>Authentic Italian cuisines. 6 creative dishes to choose from. All 
            are from our stone oven, all organic, all delicious.
          </p>
          {pizzaData.length > 0 ? (
            <ul className='pizzas'>
              { pizzaData.map((pizza) => (
                <Pizza
                key={pizza.name}
                pizzaObj={pizza}
                />
                )
              )}
            </ul>)
            : (<p>We are still working on our menu</p>)
          }
        </>
      </menu>
  )
}

function Pizza(props) {
  let pizza = props.pizzaObj;
    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
          <img src={pizza.photoName} alt={pizza.name}></img>
					<div>
						<h3>{pizza.name}</h3>
						<p>{pizza.ingredients}</p>
						<span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
					</div>
        </li>
    )
}

function Header() {
 return (
    <header className='header'>
      <h1>Fast react pizza company</h1>
    </header>
 )
}

function Footer() {
  const getHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = getHour >= openHour && getHour <= closeHour;
    return (
      <footer className='footer'>
        { isOpen ? <Order closeHour={closeHour}/>
          : <p>We are only open in between {openHour}:00 and {closeHour}:00</p> }
      </footer>
    )
}

function Order(props) {
  return (
    <div className='order'>
      <p>
        We are open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
			<App />
		</React.StrictMode>
)