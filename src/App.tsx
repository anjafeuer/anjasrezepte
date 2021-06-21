import './App.css';
import './Nav.js';
import {AppBar, Theme, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Main} from "./Main";

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'grid',
        gridTemplateColumns: 'auto',
        justifyContent: 'center',
        justifyItems: 'space-between',
        backgroundColor: '#c96812',
        fontFamily: 'Helvetica',
    },
    main: {
            display: 'grid',
            width: '100vw',
            height: '100vh',
            marginTop: 100,
            gridTemplateColumns: '1fr',
            justifyItems: 'center',
            fontFamily: 'Helvetica',
        },
    }))


export const App = () => {
    const classes = useStyles()

  return (
    <div className="App">

          <AppBar>
              <Toolbar className={classes.toolbar}>
                  <div className="grid-container">
                      <div >
                          <img src="logo_cc.PNG" width= "80px" height="80px" alt="logo"/>
                      </div>
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
