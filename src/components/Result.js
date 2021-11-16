import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        background: '#6471b5'
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        background: 'baa4d3'
        
    }
}))

function Result() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item style={{
                border: '2px solid #cfe9fa',
                background: '#04aae2',
                borderRadius: '25%',
                textAlign: 'center',
                padding: '10px'
                // width: '50%'
            }}>
                <Typography variant="h6">Result displayed here:
                </Typography>
            </Grid>
        </Grid>
    )
}

export { Result };