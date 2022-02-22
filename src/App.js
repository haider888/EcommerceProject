import React,{useState} from 'react';
import Login from './screens/Login';
import Registration from './screens/Registration';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import AddToCart from './components/AddToCart';
import Upload from './components/Upload';




function App() {
  const [open, setOpen] = useState(false);



  const [CartItems, setCartItems] = useState([]);

  const handleAddProduct = (values) => {
    // toast(`Add to Cart :${values.title}
    //         Price: ${values.price}`);
    const productExist = CartItems.find((item) => item.id === values.id);
      console.log('haider',handleAddProduct)
    if (productExist) {
      setCartItems(
        CartItems.map((item) =>
          item.id === values.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...CartItems, { ...values, quantity: 1 }]);
    }
  };

  const handleDelete = (id, items) => {
    // toast(`Remove frome The Cart :${items.title}
    //         Price: ${items.price}`);
    const myitems = CartItems.filter((elements, i) => elements.id !== id);
    setCartItems(myitems);
  };





 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                open={open}
                setOpen={setOpen}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
      <AddToCart
        open={open}
        setOpen={setOpen}
        handleAddProduct={handleAddProduct}
        CartItems={CartItems}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
