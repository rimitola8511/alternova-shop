import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/navbar";
import ProductList from "./components/product-list";
import { Drawer } from "./components/drawer";
import { Container } from "./components/container";
import { Head } from "./components/head";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Drawer />

      <Container>
        <ProductList />
      </Container>

      <ToastContainer />
    </>
  );
}

export default App;
