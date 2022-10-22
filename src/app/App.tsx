import './App.css';
import {AppBar, Theme, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Main} from "./Main";
import React from "react";


const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'grid',
        gridTemplateColumns: 'auto',
        justifyContent: 'center',
        justifyItems: 'space-between',
        backgroundColor: '#5c967e',
        fontFamily: 'Helvetica',
    },
    title:{
        fontFamily:'Lucida Handwriting',
        fontSize: '25px',

    },
    main: {
            display: 'grid',
            width: '100vw',
            height: '100vh',
            marginTop: 100,
            gridTemplateRows: 'auto 1fr auto',
            justifyItems: 'center',
            fontFamily: 'Helvetica',
        },
    bottomNav: {
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        },
    }))


export const App = () => {
    const classes = useStyles()
  return (
    <div className="App">
          <AppBar>
              <Toolbar className={classes.toolbar}>
                  <div className="grid-container">
                      <p className={classes.title}>Rezeptsammlung</p>
                      {/*<div >*/}
                      {/*    <img src="logorezepte.png" width= "80px" height="80px" alt="logo"/>*/}
                      {/*</div>*/}
                  </div>

              </Toolbar>
          </AppBar>

          <div className={classes.main}>
              <Main/>
          </div>
    </div>
  );
}

export default App;
