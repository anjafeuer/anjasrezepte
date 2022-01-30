import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        position: 'relative',
        fontFamily: 'Helvetica',
    },
    note:{
        fontWeight: 'bold',
    },
    gridcontainer:{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        padding: '5px',
        justifyItems: 'center',
    },
    griditem:{
        display: 'grid',
        padding: '20px',
        fontWeight: 'bold',
        margin: theme.spacing(2),
    },

}))

export function InsightPics(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.note}>
                <p>Eindrücke. Lass dich inspirieren.</p>
                <div className={classes.gridcontainer}>
                    <Paper className={classes.griditem} elevation={1} >
                        <img src="kaiserschmarrn.JPG" width="200px" height="300px"/>
                    </Paper>
                    <Paper className={classes.griditem} elevation={1} >
                        <img src="potato.JPG" width="200px" height="300px"/>
                    </Paper>
                </div>
            </div>
        </div>
    )
}