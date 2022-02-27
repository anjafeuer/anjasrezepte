import * as React from "react";
import {Card, Table} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import '../contact/Contact.tsx';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#ebf1f5',
        width: '300px',
        padding: '5px',
        fontStyle: 'italic',
    },
        input:{
        padding: '20px',
        },
    })

export function Cooking(){
    const classes = useStyles()
        return (

        <div>
            <div className={classes.input}>
                <Card className={classes.card}>
                    Foccacia
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    Scharfes Curry
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    <Table>
                        <ul>Oma's Apfelstrudel</ul>
                        <ul>250 g	Mehl</ul>
                        <ul>140 g	Butter</ul>
                        <ul>2		Eier (Eigelb und Eiweiss trennen!)</ul>
                        <ul>2-3 EL	Sauerrahm/Creme Fraîche</ul>
                        <ul>1 Prise	Salz</ul>
                        <ul>6		Äpfel (z.B. Boskop)</ul>
                        <ul>4 EL    helle Rosinen (kann auch ohne Rosinen)</ul>
                        <ul>4 EL    Zucker</ul>
                        <ul>Etwas   Zimt</ul>
                    </Table>
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    Papa's Buchteln
                </Card>
            </div>

            {/*<div className={classes.input}>
                <Card className={classes.card}>
                    Schreib mir doch eine Nachricht, wenn du eines deiner Rezepte mit mir teilen willst.
                        <a href="../contact/Contact.tsx"> contact formular.</a>
                </Card>
            </div>*/}
        </div>
    )
}