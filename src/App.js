import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "Toothbrush", quantity: 1, packed: false },
  { id: 5, description: "Towel", quantity: 2, packed: true },
  { id: 6, description: "Shampoo", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList initialItems={items} />
      <Stats />
    </div>
  );
}
