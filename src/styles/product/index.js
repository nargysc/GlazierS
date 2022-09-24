import styled from "@emotion/styled";
import { Button, IconButton, Box } from "@mui/material";
import { slideInBottom, slideInRight } from "../../animation";
import { Colors } from "../theme";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  fontFamily: '"Roboto", "sans-serif"',
  justifyContent: "center",
  borderRadius:"40px",
  alignItems: "center",
  flexDirection: "column",
  color: Colors.primary,
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
    borderRadius: "40px",
  transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)"},
  padding: '10px',
  [theme.breakpoints.down("md")]: {
    width: "70%", 
    padding: '24px',
  }
}));

export const ProductActionButton = styled(IconButton)(() => ({
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(({ isfav, theme }) => ({
  color: isfav ? Colors.primary : Colors.primary,  
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",    
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.primary,
  borderRadius:"40px",
  cursor: "pointer",
  fontWeight:"bold",
  color: Colors.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: '"Roboto", "sans-serif"',
  color: Colors.primary,
}));

export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({ 
  [theme.breakpoints.up("md")]: {
    display: show ? 'visible' : 'none',
    position: "absolute",
    right: 0,
    top: '20%',
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  }
}));

