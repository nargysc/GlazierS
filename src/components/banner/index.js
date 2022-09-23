import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">A new PHILOSOPHY on JEWERLY</Typography>
        <BannerTitle variant="h2">
          New Bags
        </BannerTitle>

        <BannerDescription variant="subtitle">
                    STRAIGHT FROM OUR ATELIER. DISCOVER OUR LATEST JEWELRY DESIGNS: EARRINGS, RINGS, NECKLACES AND BRACELETS FOR LIFE ON-THE-GO.

        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
