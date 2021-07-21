import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Explorar.css';

class Explorar extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header title="Explorar" />
        <div>
          <button
            data-testid="explore-food"
            className="btn-grad"
            type="submit"
            onClick={ () => history.push('/explorar/comidas') }
          >
            Explorar Comidas
          </button>
          <button
            data-testid="explore-drinks"
            className="btn-grad"
            type="submit"
            onClick={ () => history.push('/explorar/bebidas') }
          >
            Explorar Bebidas
          </button>
          <Footer history={ history } />
        </div>
      </>
    );
  }
}

Explorar.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Explorar;
