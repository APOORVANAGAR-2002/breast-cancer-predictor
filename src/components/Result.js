import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from 'axios';

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
    // const res = JSON.parse(window.DEFAULT_DATA)

    // let res = $('script[src*=Result.js]');
    // let v1 = res.attr('data-var1');
    // console.log(v1)
    let submitResult = (event) => {
        axios.get("http://127.0.0.1:5000/submit").then((response)=>{
            const r = response
            console.log(r)
        })
    }
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
                <Button variant="contained" color="primary" onClick={submitResult}>Res</Button>

            </Grid>
        </Grid>
    )
}

export { Result };