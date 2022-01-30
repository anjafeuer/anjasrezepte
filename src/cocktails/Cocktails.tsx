import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
    root:{
        position: 'relative',
        fontFamily: 'Helvetica',
    },
    note:{
        fontWeight: 'bold',
    },

})

export function Cocktails(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.note}>
                <p>A little party never killed nobody.</p>
            </div>
            <div>
                <p>Cosmopolitan.</p>
            </div>



        </div>
    )
}