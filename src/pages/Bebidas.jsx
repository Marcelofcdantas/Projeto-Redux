import React from 'react';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';

class Bebidas extends React.Component {
  render() {
    return (
      <>
        <Header title="Bebidas">
          <SearchButton />
        </Header>
        <div>Página principal receitas BEBIDAS</div>
      </>
    );
  }
}

export default Bebidas;
