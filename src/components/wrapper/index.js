import {useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { WrapperContainer, WrapperContent,WrapperDescription, WrapperImage, WrapperShopButton, WrapperTitle,} from "../../styles//wrapper";

export default function Wrapper() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <WrapperContainer >
      <WrapperImage src="/images/wrapper/banner.png" />
      <WrapperContent>
        <WrapperTitle variant="h2">
          A new philosophy on jewerly
        </WrapperTitle>

        <WrapperDescription variant="subtitle">
                    STRAIGHT FROM OUR ATELIER. DISCOVER OUR LATEST JEWELRY DESIGNS: EARRINGS, RINGS, NECKLACES AND BRACELETS FOR LIFE ON-THE-GO.

        </WrapperDescription>

        <WrapperShopButton color="primary">Shop Now</WrapperShopButton>
      </WrapperContent>
    </WrapperContainer>
  );
}
