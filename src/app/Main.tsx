import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import makeStyles from '@material-ui/core/styles/makeStyles'
import {Cooking} from '../cook/Cooking'
import {Baking} from '../bake/Baking'
import {Cocktails} from '../cocktails/Cocktails'
import {Home} from './Home'
import HomeIcon from '@mui/icons-material/Home'
import CakeIcon from '@mui/icons-material/Cake'
import RestaurantIcon from "@mui/icons-material/Restaurant"
import LocalBarIcon from "@mui/icons-material/LocalBar"

const useStyles = makeStyles({
    bottomNav: {
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: '#1c8c6b'
    },
    icon: {
        color: 'white',
        fontFamily: 'Helvetica',
    }
})

type Tab = 'home' | 'occasion' | 'cooking' |'cocktails'

export const Main = () => {
    const classes = useStyles()
    const [navTab, setNavTab] = React.useState('home');

            return (
                <div>
                    {navTab === 'home' && <Home/>}
                    {navTab === 'occasion' && <Baking/>}
                    {navTab === 'cooking' && <Cooking/>}
                    {navTab === 'cocktails' && <Cocktails/>}

                    <BottomNavigation
                        showLabels
                        className={classes.bottomNav}
                        value={navTab}
                        onChange={(event, newValue) => {
                            setNavTab(newValue);
                        }}
                            sx={{
                                "& .Mui-selected, .Mui-selected > svg": {
                                    color: "#ffffff",
                                    fontWeight: "bold"
                                },
                                "& .MuiBottomNavigationAction-root": {
                                    color: "#0f523e",
                                    backgroundColor: "#e6b1c0"
                                }
                        }}
                    >
                        <BottomNavigationAction className={classes.icon} label="Home" icon={<HomeIcon />} value={'home'} />
                        <BottomNavigationAction className={classes.icon} label="Backen" icon={<CakeIcon/>} value={'occasion'}/>
                        <BottomNavigationAction className={classes.icon} label="Kochen" icon={<RestaurantIcon/>} value={'cooking'} />
                        <BottomNavigationAction className={classes.icon} label="Cocktails" icon={<LocalBarIcon/>} value={'cocktails'}/>
                    </BottomNavigation>
                </div>
            );
}
