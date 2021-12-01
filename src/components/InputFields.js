import { Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import axios from 'axios';
import { useState } from "react";

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

const initialData = {
    radius: '',
    texture: '',
    perimeter: '',
    area: '',
    smoothness: ''
}

function InputFields() {

    const classes = useStyles();
    const [data, setData] = useState(initialData);

    let handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        })
    }

    let submitForm = (event) => {
        console.log(data);
        axios.post("http://127.0.0.1:5000/submit", data).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        }) 

    }
    

    return (
        <Grid container style={{
            background: '#cfe9fa'
        }}>
            <Grid container component='form' className={classes.root}>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_radius</Typography>
                    <TextField
                        id="outlined-basic"
                        label="Input-1"
                        variant="outlined"
                        size="small"
                        name="radius"
                    value={data.radius}
                    onChange={handleInputChange}

                    />
                </Grid>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_texture</Typography>
                    <TextField id="outlined-basic"
                        label="Input-2"
                        variant="outlined"
                        size="small"
                        name="texture"
                        value={data.texture}
                        onChange={handleInputChange}
                        />
                </Grid>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_perimeter</Typography>
                    <TextField id="outlined-basic"
                        label="Input-3"
                        variant="outlined"
                        size="small"
                        name="perimeter"
                        value={data.perimeter}
                        onChange={handleInputChange}
                        />
                </Grid>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_area</Typography>
                    <TextField id="outlined-basic"
                        label="Input-4"
                        variant="outlined"
                        size="small"
                        name="area"
                        value={data.area}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item className={classes.input}>
                    <Typography variant="body1">mean_smoothness</Typography>
                    <TextField id="outlined-basic"
                        label="Input-5"
                        variant="outlined"
                        size="small"
                        name="smoothness"
                        value={data.smoothness}
                        onChange={handleInputChange}
                        />
                </Grid>
            </Grid>

            <Grid container style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '30px'
            }}>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={submitForm}>Submit</Button>
                </Grid>
            </Grid>

        </Grid>

    )
}

export default InputFields;