import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
        gridcontainer:{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto auto',
            padding: '10px',
            justifyItems: 'center',
        },
        griditem:{
            padding: '20px',
        }

}))

export function Home(){
    const classes = useStyles()
    return (
        <div>
        <p>Creative Card - Order a special card.</p>

    <div className={classes.gridcontainer}>
        <div className={classes.griditem}>
            <img src="/public/pictures/flower.png" width="200px" height="300px" alt="flower"/>
            <p> Flower Theme</p>
        </div>
        <div className={classes.griditem}>
            <img src="/public/pictures/dive.jpg" width="200px" height="300px" alt="dive"/>
            <p>Travel Theme</p>
        </div>
        <div className={classes.griditem}>
            <img src="/public/pictures/cupcake.jpg" width="200px" height="300px" alt="cupcake"/>
            <p>Birthday Theme</p>
        </div>
        <div className={classes.griditem}>
            <img src="/public/pictures/avocado.png" width="200px" height="300px" alt="avocado"/>
            <p>Food Theme</p>
        </div>
    </div>

    <p>Note: This website is a mockup page. No real ordering here.</p>

</div>
    )
}