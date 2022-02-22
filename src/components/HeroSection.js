import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import ecommerce from "../images/ecommerce.jpg"

const HeroSection = () => {
    const gridStyle={marginTop:'65px'}
    
  return (
    <>
      <Grid container direction="row" alignItems="center" >
        <Grid
          item
          xs={12}
          sm={6}
          order={{ xs: 2, sm: 1 }}
          justifyContent="center"
          paddingLeft="50px"
        >
          <Typography variant="h3" color="inherit">
            Sherazi Store
          </Typography>
          <Typography sx={{ marginTop: 2 }}>
            we Offer Branded dresses for you!
          </Typography>
          <Button
            size="large"
            variant="contained"
            sx={{ borderRadius: 5, marginTop: 2 }}
          >
            Call Us
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent="center"
          order={{ xs: 1, sm: 2 }}
          style={gridStyle}
        >
          <Box component="img" src={ecommerce} width="100%" />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
