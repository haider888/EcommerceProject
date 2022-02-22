import React from 'react'
import { AppBar, Typography, Button, Toolbar, Link } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from 'react-router-dom';
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = ({open,setOpen}) => {
   
   
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" flexGrow={1}>
            Sherazi Store
          </Typography>
          {/* <Link component="button" variant="string" sx={Color="White"}>
            Button Link
          </Link> */}
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            component={NavLink}
            to="/upload"
            // startIcon={<LockOpenIcon />}
          >
            Upload
          </Button>
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            component={NavLink}
            to="/login"
            startIcon={<LockOpenIcon />}
          >
            sign in
          </Button>
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            component={NavLink}
            to="/registration"
            endIcon={<LogoutIcon />}
          >
            Sign UP
          </Button>

          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon onClick={() => setOpen(true)} />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header