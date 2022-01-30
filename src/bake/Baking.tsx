import * as React from "react";
import {Card, Table} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme, Paper} from '@material-ui/core'

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
    card: {
        backgroundColor: '#ebf1f5',
        padding: '5px'
    },
    input:{
        padding: '20px',

    },
}))

export function Baking(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <div className={classes.gridcontainer}>
            <Paper className={classes.griditem} elevation={1} >
                {/*<img src="cupcake.JPG" width="200px" height="300px" alt="cupcake"/>*/}
                <img src="kaiserschmarrn.JPG" width="200px" height="300px" alt="kaiserschmarrn"/>
            </Paper>
        </div>
        <div>
            <p className={classes.input}>
                Hier findest du meine Lieblings-Naschereien.</p>
            <Card className={classes.card}>
                <p>Toblerone Mousse</p>
                <Table>
                    <ul>200 g  Toblerone</ul>
                    <ul>2 EL   Puderzucker</ul>
                    <ul>2 dl   Vollrahm</ul>
                    <ul>2 kl.  Eier</ul>
                    <ul>Zubereitung:</ul>
                </Table>


            </Card>
        </div>
        </div>
    )
}