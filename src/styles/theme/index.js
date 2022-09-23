import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#67645E",
    secondary: '#F1F0ED',
    bg:'#F1F0ED'
};

const theme = createTheme({
    palette : { 
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary 
        },
        bg: {
            main:Colors.bg
        }
    },
    components : {  
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        }
    }});

    export default theme;