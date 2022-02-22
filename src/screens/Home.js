import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  Stack,
  Button,
} from "@mui/material";
import React from 'react'
import Header from '../components/Header'
import HeroSection from "../components/HeroSection";
import { useProductList } from '../components/Hooks/useProductsList'
import { useRemoveProducts } from "../components/Hooks/useRemoveProducts";
import { useAddToCart } from "../components/Hooks/useAddToCart";


const Home = ({ open, setOpen, handleAddProduct }) => {
  const { isLoading, data, isError } = useProductList();
   const { mutate: deletevideo } = useRemoveProducts();
  

  console.log("hhhh", data);
  if (isLoading) {
    return <h2>Loading......</h2>;
  }
  if (isError) {
    return <h2>error.message</h2>;
  }


  const removeProducts = (id) => {
    console.log("id", id);
    deletevideo(id);
  };

 

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <HeroSection />
      <Typography
        variant="h4"
        mt={6}
        mb={6}
        align="center"
        marginBottom="100px "
      >
        Products - Section
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ flexWrap: "wrap" }}
      >
        {data?.data.map((item) => {
          return (
            <Card sx={{ maxWidth: 300, mb: 2 }} key={item.id}>
              <CardMedia component="img" height="200" image={item.image} />
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="h6">Price {item.price}$</Typography>
                <Typography>{item.description}</Typography>
                <Button
                  size="large"
                  variant="contained"
                  sx={{ marginTop: 2 }}
                  fullWidth
                  onClick={() => handleAddProduct(item)}
                >
                  Add To Cart
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  sx={{ marginTop: 2 }}
                  fullWidth
                  onClick={() => removeProducts(item.id)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default Home