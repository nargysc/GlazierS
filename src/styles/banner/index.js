import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "90%",
  height: "80%",
  padding: "10px 10px",
  marginLeft:"60px",
  background: Colors.secondary,
  borderRadius: "50px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 576,
  padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "350px",
  height:"480px",
  borderRadius: "30px",
  [theme.breakpoints.down("md")]: {
    width: "360px",
    height:"350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "150px",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.5,
  fontSize: "42px",
  marginBottom: "20px",
fontFamily:"'Roboto', 'sans-serif'",
fontWeight:"500",
  color: Colors.primary,
  [theme.breakpoints.down('sm')]: {
   fontSize: '42px',    
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const BannerShopButton = styled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "color",
  name: "MyShopButton",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.secondary,
    props.color === "secondary" && styles.primary,
  ],
})(({ theme }) => ({
  padding: "20px 0px",
  color: Colors.primary,
  fontWeight: "bold",
  backgroundColor: Colors.secondary,
  fontSize: "16px",
  borderRadius: "20px",

  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
    backgroundColor: Colors.secondary,
  },
}));