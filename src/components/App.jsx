import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./Grocerylist";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [items, setItems] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToogleItem={handleToogleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
