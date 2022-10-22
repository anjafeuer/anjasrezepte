import * as React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import '../contact/Contact.tsx'
import '../impressions/InsightPics.tsx'
import {Link, Paper, Theme} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        position: 'relative',
        fontFamily: 'Helvetica',
    },
    note:{
      fontWeight: 'bold',
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
}))

export function Home(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.note}>
                <p>KOCHEN. BACKEN. GENIESSEN.</p>
            </div>
            <div>
                <p>Hinweis: Dies ist eine Website in Entwicklung.</p>
                <div className={classes.gridcontainer}>
                    <Paper className={classes.griditem} elevation={1} >
                        {/*<img src="cupcake.JPG" width="200px" height="300px" alt="cupcake"/>*/}
                        <img src="kaiserschmarrn.JPG" width="200px" height="300px" alt="kaiserschmarrn"/>
                    </Paper>
                </div>
            <div>
                {/*<Link href="recipecollection/Baking">
                    <a>Backen</a>
                </Link>*/}

               </div>
            </div>
</div>
    )
}