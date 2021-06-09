import './App.css';
import './Nav.js';
import StarIcon from '@material-ui/icons/Star';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div >
              <img src="logo_cc.PNG" width= "100px" height="100px" alt="logo"/>
          </div>

          <div className="grid-container">
              <div className="grid-item">
                  <HomeIcon/> Home
              </div>
              <div className="grid-item">
                  <CakeIcon/> Occasions
              </div>

              <div className="grid-item">
                  <StarIcon/> Special Wish
              </div>
              <div className="grid-item">
                  <ShoppingBasketIcon/> Basket
              </div>

          </div>
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


      </header>
    </div>
  );
}

export default App;
