import * as React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, TextField} from "@material-ui/core";


const useStyles = makeStyles({
    title: {
        color: 'black',
        fontWeight: 'bold'
    },

    gridcontainer:{
            display: 'grid',
            gridTemplateColumns: 'auto',
            padding: '10px',
            justifyItems: 'center',
        },
    griditem:{
            padding: '10px',
            justifyItems: 'center',
    }})

export function Contact(){
    const classes = useStyles()
    return (
        <div className={classes.gridcontainer}>
            <div className={classes.griditem}>
                <p className={classes.title}>Please enter your email:</p>

            </div>
            <div className={classes.griditem}>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="email" variant="outlined" />
                </form>
            </div>

           <div className={classes.griditem}>
               <p className={classes.title}>Please enter your request:</p>
           </div>
            <div className={classes.griditem}>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Request" variant="outlined" />
                </form>
            </div>
            <div className={classes.griditem}>
                <Button variant="contained" color="primary">
                    Send Request
                </Button>
        </div>

    </div>

    )
}