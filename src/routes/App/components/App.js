import React, { useContext } from 'react';
import { ThemeContext } from '../../../common/contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import '../styles/_app.scss';

function App() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const history = useHistory();

  const switchDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const goToSubmitPage = (e) => {
    e.preventDefault();
    history.push('/submit');
  };

  return (
    <div className="app">
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

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary" href="true">
            Save
          </a>
          <a onClick={goToSubmitPage} className="button is-link" href="true">
            Submit
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
