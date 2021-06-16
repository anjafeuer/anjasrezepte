import './App.css';
import './Nav.js';
import StarIcon from '@material-ui/icons/Star';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';
import {AppBar, Theme, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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
      <header className="App-header">
          <AppBar>
              <Toolbar className={classes.toolbar}>

                  <div className="grid-container">
                      <div className="grid-item">
                          <HomeIcon/> Home
                      </div>
                      <div className="grid-item">
                          <CakeIcon/> Occasions
                      </div>

                      <div >
                          <img src="logo_cc.PNG" width= "80px" height="80px" alt="logo"/>
                      </div>

                      <div className="grid-item">
                          <StarIcon/> Special Wish
                      </div>
                      <div className="grid-item">
                          <ShoppingBasketIcon/> Basket
                      </div>

                  </div>

              </Toolbar>
          </AppBar>


          <div className={classes.main}>
              <p>Creative Card - Order a special card.</p>

              <div className="grid-container">
                  <div className="grid-item">
                      <img src="/pictures/flower.png" width="200px" height="300px" alt="flower"/>
                      <p> Flower Theme</p>
                  </div>
                  <div className="grid-item">
                      <img src="/pictures/dive.jpg" width="200px" height="300px" alt="dive"/>
                      <p>Travel Theme</p>
                  </div>
                  <div className="grid-item">
                      <img src="/pictures/cupcake.JPG" width="200px" height="300px" alt="cupcake"/>
                      <p>Birthday Theme</p>
                  </div>
                  <div className="grid-item">
                      <img src="/pictures/avocado.png" width="200px" height="300px" alt="avocado"/>
                      <p>Food Theme</p>
                  </div>
              </div>

              <p>Note: This website is a mockup page. No real ordering here.</p>

          </div>


      </header>
    </div>
  );
}

export default App;
