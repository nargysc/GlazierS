import {ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import {AppbarContainer,AppbarHeader,MyList} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
export default function AppbarDesktop({ matches }) {
  
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">Glazier.</AppbarHeader>
      <MyList type="row">
          <ListItemText primary="Home" /> 
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
}
