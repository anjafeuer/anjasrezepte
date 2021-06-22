import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper, Theme} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        position: 'relative',
        fontFamily: 'Helvetica',
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
    note:{
      fontWeight: 'bold',
    },


}))

export function Home(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.note}>
                <p>This is Creative Cards - Feel free to be inspired.</p>
            </div>

    <div className={classes.gridcontainer}>
        <Paper className={classes.griditem} elevation={1} >
            <img src="flower.png" width="200px" height="300px" alt="flower"/>
            <p> Flower Theme</p>
        </Paper>
        <Paper className={classes.griditem} elevation={1} >
            <img src="dive.jpg" width="200px" height="300px" alt="dive"/>
            <p>Travel Theme</p>
        </Paper>
        <Paper className={classes.griditem} elevation={1} >
            <img src="cupcake.JPG" width="200px" height="300px" alt="cupcake"/>
            <p>Birthday Theme</p>
        </Paper>
        <Paper className={classes.griditem} elevation={1} >
            <img src="avocado.png" width="200px" height="300px" alt="avocado"/>
            <p>Food Theme</p>
        </Paper>
    </div>
            <div>
                <p>Note: This website is a mockup page in processing. No real ordering here.</p>
            </div>



</div>
    )
}