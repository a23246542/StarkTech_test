import React, { useContext } from 'react';
import { ThemeContext } from '../../../common/contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import '../styles/_submit.scss';

function Submit() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const history = useHistory();

  const switchDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const goToHomePage = () => {
    history.goBack();
  };

  return (
    <div className="app">
      <section className="section">
        <div className="buttons level-right">
          <a onClick={goToHomePage} className="button is-link" href>
            HomePage
          </a>
        </div>
      </section>
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge Dark Mode Challenge</h1>
        </div>
        <button
          onClick={switchDarkMode}
          className="app__dark-mode-btn icon level-right"
        >
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            color={isDarkMode ? '#FFA500' : null}
          />
        </button>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Submit;
