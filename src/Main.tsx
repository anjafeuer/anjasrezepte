import React, {useState} from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import MailIcon from '@material-ui/icons/Mail'
import CakeIcon from '@material-ui/icons/Cake'
import PersonIcon from '@material-ui/icons/Person'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {App} from './App'
import {Contact} from './Contact'
import {AboutMe} from './AboutMe'
import {Occasion} from './Occasion'
import {Home} from './Home'

const useStyles = makeStyles({
    bottomNav: {
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: '#c96812'
    },
    icon: {
        color: 'white'
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
                        <BottomNavigationAction className={classes.icon} label="Ocassions" icon={<CakeIcon/>} value={'oaccasion'}/>
                        <BottomNavigationAction className={classes.icon} label="About Me" icon={<PersonIcon />} value={'aboutme'} />
                        <BottomNavigationAction className={classes.icon} label="Contact" icon={<MailIcon />} value={'contact'}/>
                    </BottomNavigation>
                </div>
            )
}
