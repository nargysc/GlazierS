import { Card, CardContent, TextField, Typography, Grid, Stack, Button} from "@mui/material";
import { Colors } from "../../styles/theme";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";

export default function Contact() {
  return (
                                    <Box
      sx={{
        background: Colors.secondary,
        borderRadius:"50px",
        color: Colors.primary,
        marginBottom: 5,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >      <Typography gutterBottom variant="h4" align="center">
        Contact Us
        </Typography>
        <Card>
            
            <CardContent>
                <form>
                <Grid container spacing={1}
                >
                    <Grid item xs={12} sm={6}>
                        <TextField label="First Name" placeholder="Enter your first name" variant="outlined" fullWidth required/>
                        </Grid>
                           <Grid item xs={12} sm={6}>
                        <TextField label="Last name" placeholder="Enter your first name" variant="outlined" fullWidth required/>
                        </Grid>
                           <Grid item xs={12} sm={6}>
                        <TextField  type="email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField  type="number" label="Phone" placeholder="Enter your phone" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField   label="Message"  multiline rows={4}placeholder="Type your message" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Stack>
            <Button
              startIcon={<SendIcon sx={{ color: Colors.secondary }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Submit
            </Button>
          </Stack>
          </Grid>
                        </Grid>
                        </form>
            </CardContent>
            </Card>
            </Box>
  );
}
