import React from 'react'
import {
  Modal,
  Typography,
  Button,
  Box,
  Stack,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const AddToCart = ({ open, setOpen, CartItems,handleDelete }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Shopping Cart
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              sx={{ flexWrap: "wrap" }}
            >
              {CartItems.map((item) => (
                <Card sx={{ maxWidth: 300, mb: 2 }} key={item.id}>
                  <CardMedia
                    component="img"
                    height="100"
                    width="100"
                    image={item.image}
                  />
                  <CardContent height="50">
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="h6">Price {item.price}$</Typography>
                    <Typography>{item.description}</Typography>
                    <Button
                      size="large"
                      variant="contained"
                      sx={{ marginTop: 2 }}
                      fullWidth
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove Item
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AddToCart