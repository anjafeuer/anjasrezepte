import * as React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, TextField} from "@material-ui/core";


const useStyles = makeStyles({
    title: {
        color: 'black',
        fontWeight: 'bold'
    },
    send:{
        justifyItems: 'center'
    },
    gridcontainer:{
            display: 'grid',
            gridTemplateColumns: 'auto auto ',
            padding: '10px',
            justifyItems: 'center',
        },
    griditem:{
            padding: '20px',
    }})

export function Contact(){
    const classes = useStyles()
    return (
        <div className={classes.gridcontainer}>
            <div className={classes.griditem}>
                <p className={classes.title}>Please enter your contact details:</p>

            </div>
            <div className={classes.griditem}>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Adress" variant="outlined" />
                </form>
            </div>

           <div className={classes.griditem}>
               <p className={classes.title}>Please enter your request.</p>
           </div>
            <div className={classes.griditem}>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Request" variant="outlined" />
                </form>
            </div>
            <div className={classes.send}>
             <Button variant="contained" color="primary">
                Send
             </Button>
            </div>


        </div>
    )
}