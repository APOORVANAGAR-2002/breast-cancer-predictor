import { Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
    }
}))

function InputFields() {

    const classes = useStyles();

    return (
        <Grid container style={{
            background: '#cfe9fa'
        }}>
            <Grid container component='form' className={classes.root}>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_radius</Typography>
                    <TextField id="outlined-basic" label="Input-1" variant="outlined" size="small" />
                </Grid>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_texture</Typography>
                    <TextField id="outlined-basic" label="Input-2" variant="outlined" size="small" />
                </Grid>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_perimeter</Typography>
                    <TextField id="outlined-basic" label="Input-3" variant="outlined" size="small" />
                </Grid>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_area</Typography>
                    <TextField id="outlined-basic" label="Input-4" variant="outlined" size="small" />
                </Grid>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_smoothness</Typography>
                    <TextField id="outlined-basic" label="Input-5" variant="outlined" size="small" />
                </Grid>
            </Grid>

            <Grid container style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '30px'
            }}>
                <Grid item>
                    <Button variant="contained" color="primary">Submit</Button>
                </Grid>
            </Grid>

        </Grid>

    )
}

export default InputFields;