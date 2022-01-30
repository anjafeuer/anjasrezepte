import * as React from "react";
import {Card} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import '../contact/Contact.tsx';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#ebf1f5',
        width: '300px',
        padding: '5px',
        fontStyle: 'italic'
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
                    Foccacia Verzieren
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    Scharfes Curry
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    Oma's Apfelstrudel
            </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    Pap's Buchteln
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    Schreib mir doch eine Nachricht, wenn du eines deiner Rezepte mit mir teilen willst.
                        <a href="../contact/Contact.tsx"> contact formular.</a>
                </Card>
            </div>
        </div>
    )
}