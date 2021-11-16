import { createTheme, Grid, makeStyles, MuiThemeProvider, responsiveFontSizes, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: "url(/image/backdrop.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",   
        overflowX: 'hidden',
        paddingBottom: "50px"
    },
    heading: {
        color: '#cfe9fa',
        textAlign: 'center',
        fontWeight: '700'
    }
}));

let theme = createTheme();
theme = responsiveFontSizes(theme);


function Landing() {
    const classes = useStyles();

    return (
             <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.home}>
                    <MuiThemeProvider theme={theme}>
                        <Typography className={classes.heading} variant="h2">BREAST CANCER PREDICTOR</Typography>
                    </MuiThemeProvider>

                </Grid>
            </Grid>
    )
}

export { Landing };