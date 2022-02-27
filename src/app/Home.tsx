import * as React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import '../contact/Contact.tsx'
import '../impressions/InsightPics.tsx'
import {Link} from "@material-ui/core"

const useStyles = makeStyles({
    root:{
        position: 'relative',
        fontFamily: 'Helvetica',
    },
    note:{
      fontWeight: 'bold',
    },

})

export function Home(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.note}>
                <p>KOCHEN. BACKEN. GENIESSEN.</p>
            </div>
            <div>
                <p>Hinweis: Dies ist eine Website in Entwicklung.</p>
                <div>
                    {/*<a href="../impressions/InsightPics.tsx"> Eindrücke
                    <img src="potato.PNG" alt="impressions"/>
                    </a>*/}
                </div>
            <div>
                <Link href="recipecollection/Baking">
                    <a>Backen</a>
                </Link>

               </div>
            </div>
</div>
    )
}