import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card, Table} from "@material-ui/core";


const useStyles = makeStyles({
    root:{
        position: 'relative',
        fontFamily: 'Helvetica',
    },
    note:{
        fontWeight: 'bold',
    },
    input:{
        padding: '20px',
    },
    card: {
        width: '300px',
        padding: '5px',
        backgroundColor: '#ebf1f5',
        fontStyle: 'italic',
        textAlign: 'center'
    },

})

export function Cocktails(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.note}>
                <p>A little party never killed nobody.</p>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    <Table>
                        <ul>Cosmopolitan</ul>
                        <ul>40 ml   Absolut Citron</ul>
                        <ul>20 ml   Tripple Sec</ul>
                        <ul>20 ml   Limettensaft</ul>
                        <ul>20 ml   Cranberrysaft</ul>
                        <ul>1 Spirale Zitronen Zest</ul>
                        <ul>Mixanleitung: Shaker mit Crushed Ice füllen, in Cocktailglas absieben.</ul>
                    </Table>
                </Card>
            </div>



        </div>
    )
}