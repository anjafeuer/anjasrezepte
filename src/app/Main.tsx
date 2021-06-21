import React, {useState} from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import MailIcon from '@material-ui/icons/Mail'
import CakeIcon from '@material-ui/icons/Cake'
import PersonIcon from '@material-ui/icons/Person'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {Contact} from '../contact/Contact'
import {AboutMe} from '../aboutme/AboutMe'
import {Occasion} from '../occasion/Occasion'
import {Home} from './Home'

const useStyles = makeStyles({
    bottomNav: {
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: '#0390fc'
    },
    icon: {
        color: 'white',
        fontFamily: 'Helvetica',
    }
})

type Tab = 'home' | 'occasion' | 'aboutme' | 'contact'


export const Main = () => {
    const classes = useStyles()
    const [navTab, setNavTab] = useState<Tab>('home')

            return (
                <div>
                    {navTab === 'home' && <Home />}
                    {navTab === 'occasion' && <Occasion />}
                    {navTab === 'aboutme' && <AboutMe/>}
                    {navTab === 'contact' && <Contact />}
                    <BottomNavigation
                        className={classes.bottomNav}
                        value={navTab}
                        onChange={(event, newValue) => {
                            setNavTab(newValue)
                        }}
                        showLabels={true}
                    >
                        <BottomNavigationAction className={classes.icon} label="Home" icon={<HomeIcon />} value={'home'} />
                        <BottomNavigationAction className={classes.icon} label="Ocassion" icon={<CakeIcon/>} value={'occasion'}/>
                        <BottomNavigationAction className={classes.icon} label="About Me" icon={<PersonIcon />} value={'aboutme'} />
                        <BottomNavigationAction className={classes.icon} label="Contact" icon={<MailIcon />} value={'contact'}/>
                    </BottomNavigation>
                </div>
            )
}
