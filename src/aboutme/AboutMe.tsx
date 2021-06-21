import * as React from "react";
import {Card} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    card: {
        width: '300px',
        position: 'fixed',
        backgroundColor: '#ebf1f5',
        alignContent: 'center',
        padding: '10px'
    }})

export function AboutMe(){
    const classes = useStyles()
        return (
        <div>
            <Card className={classes.card}>
                Hey I am Anja. Currently studying Medical Informatics. I have a passion for creativity. In my free time I love to
                spend the day painting cards with aquarell. The creative aspect about informatics really inspires me to do bigger and better.</Card>
        </div>
    )
}