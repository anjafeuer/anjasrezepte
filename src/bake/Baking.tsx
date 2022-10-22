import * as React from "react";
import {Card, Table} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from '@material-ui/core'
import {Box} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        position: 'relative',
        fontFamily: 'Helvetica',
    },
    box: {
        paddingBottom: '10px',
    },
    card: {
        backgroundColor: '#f9eaf1',
        padding: '5px',
        width: '600px',
    },
    input:{
        padding: '5px',
    },
    sweets: {
        fontWeight: 'bold',
    },
}))

export function Baking(){
    const classes = useStyles()
    return (
        <div className={classes.root}>

            <p className={classes.input}>
                Hier findest du meine Lieblings-Naschereien.</p>
            <Box className={classes.box}>
            <Card className={classes.card}>
                <p className={classes.sweets}>Toblerone Mousse</p>
                <Table>
                    <ul>200 g  Toblerone</ul>
                    <ul>2 EL   Puderzucker</ul>
                    <ul>2 dl   Vollrahm</ul>
                    <ul>2 kl.  Eier</ul>
                    <ul>Zubereitung:</ul>
                </Table>
            </Card>
        </Box>
            <Box className={classes.box}>
                <Card className={classes.card}>
                    <p className={classes.sweets}>Änismandelschnitten</p>
                    <Table>
                        <ul>150 g  ungeschälte, ganze Mandeln</ul>
                        <ul>150 g  helle Sultaninen</ul>
                        <ul>500 g  Zucker</ul>
                        <ul>500 g  Mehl</ul>
                        <ul>6      Eier</ul>
                        <ul>1 EL   Änis</ul>
                    </Table>
                    <p>Zubereitung: Eier mit dem Zucker schaumig mixxen.
                        Sultatninen, Mandeln und Änis beigeben. Zuletzt das Mehl leicht unter die Masse heben.
                        Teig auf ein mit Backpapier belegtes Blech verteilen. Ca. 25 Min. bei ca. 150 Grad hellgelb backen.
                        Nach dem Erkalten in ca. 1 cm breite Schnitten schneiden.</p>
                </Card>
            </Box>
            <Box className={classes.box}>
            <Card className={classes.card}>
                <p className={classes.sweets}>Oma's Apfelstrudel</p>
                <Table>
                    <ul>250 g	Mehl</ul>
                    <ul>140 g	Butter</ul>
                    <ul>2		Eier (Eigelb und Eiweiss trennen)</ul>
                    <ul>2-3 EL	Sauerrahm/Creme Fraîche</ul>
                    <ul>1 Prise	Salz</ul>
                    <ul>6		Äpfel (z.B. Boskop)</ul>
                    <ul>4 EL    helle Rosinen (kann auch ohne Rosinen)</ul>
                    <ul>4 EL    Zucker</ul>
                    <ul>Etwas   Zimt</ul>
                </Table>
            </Card>
        </Box>

        </div>
    )
}