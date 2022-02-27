import React, {useState} from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import CakeIcon from '@material-ui/icons/Cake'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {Contact} from '../contact/Contact'
import {Cooking} from '../cook/Cooking'
import {Baking} from '../bake/Baking'
import {Cocktails} from '../cocktails/Cocktails'
import {InsightPics} from '../impressions/InsightPics'
import {Home} from './Home'
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
    bottomNav: {
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: '#214fa5'
    },
    icon: {
        color: 'white',
        fontFamily: 'Helvetica',
    }
})

type Tab = 'home' | 'occasion' | 'aboutme' |'cocktails'


export const Main = () => {
    const classes = useStyles()
    const [navTab, setNavTab] = useState<Tab>('home')

            return (
                <div>
                    {navTab === 'home' && <Home/>}
                    {navTab === 'occasion' && <Baking/>}
                    {navTab === 'aboutme' && <Cooking/>}
                    {navTab === 'cocktails' && <Cocktails/>}
                    <BottomNavigation
                        className={classes.bottomNav}
                        value={navTab}
                        onChange={(event, newValue) => {
                            setNavTab(newValue)
                        }}
                        showLabels={true}
                    >
                        <BottomNavigationAction className={classes.icon} label="Home" icon={<HomeIcon />} value={'home'} />
                        <BottomNavigationAction className={classes.icon} label="Backen" icon={<CakeIcon/>} value={'occasion'}/>
                        <BottomNavigationAction className={classes.icon} label="Kochen" icon={<RestaurantIcon/>} value={'aboutme'} />
                        <BottomNavigationAction className={classes.icon} label="Cocktails" icon={<LocalBarIcon/>} value={'cocktails'}/>
                        {/*<BottomNavigationAction className={classes.icon} label="Eindrücke" icon={<MenuBookIcon/>} value={'insight'}/>*/}
                        {/*<BottomNavigationAction className={classes.icon} label="Kontakt" icon={<MailIcon/>} value={'contact'}/>*/}
                    </BottomNavigation>
                </div>
            )
}
