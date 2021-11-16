import { createTheme, Grid, makeStyles, MuiThemeProvider, responsiveFontSizes, Typography } from "@material-ui/core";
import '@fontsource/comfortaa';
import magnify from '../assests/magnifyingLens.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "30px 10px 30px 10px",
        textAlign: "center"
    },
    image: {
        width: '80%',
        padding: '20px',
        borderRadius: '20%',
    }
}));

let theme = createTheme();
theme = responsiveFontSizes(theme);


function Header() {

    const classes = useStyles();

    return (
        <Grid container style={{
                background: '#6471b5'
            }}>
                <Grid item xs={12} sm={4} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <img src={magnify} className={classes.image} alt='Magniying Lens' />
                </Grid>
                <Grid item xs={12} sm={8} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px 20px 20px 20px',
                    textAlign: 'justify',
                    color: '#cfe9fa'
                }}>
                    <MuiThemeProvider theme={theme}>
                    <Typography variant="body1">Breast cancer (BC) is one of the most common cancers among
                        women worldwide, representing the majority of new cancer cases and cancer-related deaths
                        according to global statistics, making it a significant public health problem in today’s
                        society.
                        </Typography>
                    </MuiThemeProvider>
                </Grid>
            </Grid>

    )
}

export { Header };