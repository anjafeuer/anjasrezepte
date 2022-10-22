import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card, Table} from "@material-ui/core";


const useStyles = makeStyles({
    root:{
        position: 'relative',
        fontFamily: 'Helvetica',
    },
    note:{

    },
    input:{
        padding: '0px',
    },
    card: {
        width: '500px',
        height: '300px',
        padding: '10px',
        backgroundColor: '#dcf7f0',
        fontFamily: 'Helvetica',
        textAlign: 'center',
    },
    table: {

        fontFamily: 'Helvetica',
    },
    title: {
        fontFamily: 'Lucida Handwriting',
    },
    drink: {
        fontWeight: 'bold',
    },

})

export function Cocktails(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.note}>
                <p className={classes.title}>A little party never killed nobody.</p>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    <Table className={classes.table}>
                        <ul className={classes.drink}>Cosmopolitan</ul>
                        <ul>40 ml   Absolut Lemon</ul>
                        <ul>20 ml   Tripple Sec</ul>
                        <ul>20 ml   Limettensaft</ul>
                        <ul>20 ml   Cranberrysaft</ul>
                        <ul>1 Spirale Zitronenzeste</ul>
                        <ul>Mixanleitung: Shaker mit Crushed Ice füllen, in Cocktailglas absieben.</ul>
                    </Table>
                </Card>
            </div>



        </div>
    )
}