import * as React from "react";
import {Card} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import '../contact/Contact.tsx';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#ebf1f5',
        width: '300px',
        padding: '5px'
    },
        input:{
        padding: '20px',

        },
    })

export function AboutMe(){
    const classes = useStyles()
        return (

        <div>
            <div className={classes.input}>
                <Card className={classes.card}>
                    Hey my name is Anja. I am currently enrolled as a Medical Informatics Student.
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    Hobbies: Climbing, Drawing and Travel.
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                 I have a passion for design. In my free time I love to
                spend the day painting cards with watercolor. Being able to connect my creativity in
                    the field of informatics is a great opportunity.

            </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    For my bachelor thesis I am extending a cycle tracking web application.
                    The goal is renewing the concept of UX Design and Visual Design.
                </Card>
            </div>

            <div className={classes.input}>
                <Card className={classes.card}>
                    If you like one of my paintings feel free to contact me under the
                        <a href="../contact/Contact.tsx"> contact formular.</a>
                </Card>
            </div>
        </div>
    )
}