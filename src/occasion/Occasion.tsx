import * as React from "react";
import {Card, Table} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    card: {
        backgroundColor: '#ebf1f5',
        padding: '5px'
    },
    input:{
        padding: '20px',

    },
})

export function Occasion(){
    const classes = useStyles()
    return (
        <div>
            <p className={classes.input}>
                There are many occasions for writing a special card.</p>
            <Card className={classes.card}>
                <Table>
                    <ul>Flower Theme</ul>
                    <ul>Travel Theme</ul>
                    <ul>Birthday Theme</ul>
                    <ul>Food Theme</ul>
                    <ul>And many more</ul>
                </Table>


            </Card>
        </div>
    )
}