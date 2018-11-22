import React, { Component } from 'react';
import HeaderBertasbih from './components/HeaderBertasbih';
import ContentBertasbih from './components/ContentBertasbih';
import LoginBertasbih from './components/LoginBertasbih';
import HomeBertasbih from './components/HomeBertasbih';
import { Route } from 'react-router-dom';
// import FooterBertasbih from './components/FooterBertasbih';
// import InputBertasbih from './components/InputBertasbih';

class App extends Component {
  state = { content: 'Ini Content' }

  onBtnOKClick = () => {
    this.setState({ content: 'Ini Comberan' })
  }

  render() {
    return (
      <div className={"container-fluid"}>
        <HeaderBertasbih navBrand={"Bertasbih"} />
        <div>
          <Route exact path="/" component={HomeBertasbih} />
          <Route path="/login" component={LoginBertasbih} />
        </div>
      </div>
    );
  }
}

export default App;

// class Manusia {
//   constructor(bertasbih, kucing) {
//     this.nama = bertasbih
//     this.umur = kucing
//   }
// }

// var Andi = new Manusia('Andi', 25);
// var Budi = new Manusia('Budi', 27);