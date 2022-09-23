import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
   borderRadius:"20px",
   margin:"10px",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: Colors.secondary,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
     fontFamily: '"Roboto", "sans-serif"',
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  color: Colors.primary,
  fontSize: "1.5rem",
}));
