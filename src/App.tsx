import React, { useState } from "react";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreateIcon from "@mui/icons-material/Create";
import UpdateIcon from "@mui/icons-material/Update";
import "./App.css";

interface Product {
  name: string;
  price: string;
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const products: Product[] = [
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    { name: "Apple", price: "$1" },
    { name: "Banana", price: "$0.5" },
    { name: "Cherry", price: "$2" },
    { name: "Date", price: "$3" },
    { name: "Elderberry", price: "$4" },
    // Add more products here to simulate a larger dataset
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <div>
        <img src="/jairo.png" alt="logo" className="logo" />
      </div>
      <div className="search-container">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="table-container">
        <ProductTable products={filteredProducts} />
      </div>
      <div className="spacing-on-button"></div>
      {/* ------------------------------- buttons -------------------------------- */}
      <div className="footer-Button" style={{ display: "flex" }}>
        <div className="create-button">
          <Button>
            <CreateIcon className="button-color" />
          </Button>
        </div>
        <div>
          <Button className="Fav-Icon-Button">
            <FavoriteIcon className="button-color" />
          </Button>
        </div>
        <div className="home-button-mui">
          <Button
            variant="contained"
            onClick={() => (window.location.href = "/")}
          >
            <HomeIcon />
          </Button>
        </div>
        <div className="cart-button">
          <Button>
            <ShoppingCartIcon className="button-color" />
          </Button>
        </div>
        <div className="update-button">
          <Button>
            <UpdateIcon className="button-color" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
